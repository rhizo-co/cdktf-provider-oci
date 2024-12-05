# `dataOciApmSyntheticsResult` Submodule <a name="`dataOciApmSyntheticsResult` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsResult <a name="DataOciApmSyntheticsResult" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result oci_apm_synthetics_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResult;

DataOciApmSyntheticsResult.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apmDomainId(java.lang.String)
    .executionTime(java.lang.String)
    .monitorId(java.lang.String)
    .resultContentType(java.lang.String)
    .resultType(java.lang.String)
    .vantagePoint(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#apm_domain_id DataOciApmSyntheticsResult#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.executionTime">executionTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#execution_time DataOciApmSyntheticsResult#execution_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.monitorId">monitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#monitor_id DataOciApmSyntheticsResult#monitor_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.resultContentType">resultContentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_content_type DataOciApmSyntheticsResult#result_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.resultType">resultType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_type DataOciApmSyntheticsResult#result_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.vantagePoint">vantagePoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#vantage_point DataOciApmSyntheticsResult#vantage_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#id DataOciApmSyntheticsResult#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.apmDomainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#apm_domain_id DataOciApmSyntheticsResult#apm_domain_id}.

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.executionTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#execution_time DataOciApmSyntheticsResult#execution_time}.

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.monitorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#monitor_id DataOciApmSyntheticsResult#monitor_id}.

---

##### `resultContentType`<sup>Required</sup> <a name="resultContentType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.resultContentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_content_type DataOciApmSyntheticsResult#result_content_type}.

---

##### `resultType`<sup>Required</sup> <a name="resultType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.resultType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_type DataOciApmSyntheticsResult#result_type}.

---

##### `vantagePoint`<sup>Required</sup> <a name="vantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.vantagePoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#vantage_point DataOciApmSyntheticsResult#vantage_point}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#id DataOciApmSyntheticsResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsResult resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResult;

DataOciApmSyntheticsResult.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResult;

DataOciApmSyntheticsResult.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResult;

DataOciApmSyntheticsResult.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResult;

DataOciApmSyntheticsResult.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciApmSyntheticsResult.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciApmSyntheticsResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciApmSyntheticsResult to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciApmSyntheticsResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultDataSet">resultDataSet</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList">DataOciApmSyntheticsResultResultDataSetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.executionTimeInput">executionTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.monitorIdInput">monitorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultContentTypeInput">resultContentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultTypeInput">resultTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.vantagePointInput">vantagePointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.executionTime">executionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultContentType">resultContentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultType">resultType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.vantagePoint">vantagePoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `resultDataSet`<sup>Required</sup> <a name="resultDataSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultDataSet"></a>

```java
public DataOciApmSyntheticsResultResultDataSetList getResultDataSet();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList">DataOciApmSyntheticsResultResultDataSetList</a>

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.apmDomainIdInput"></a>

```java
public java.lang.String getApmDomainIdInput();
```

- *Type:* java.lang.String

---

##### `executionTimeInput`<sup>Optional</sup> <a name="executionTimeInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.executionTimeInput"></a>

```java
public java.lang.String getExecutionTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.monitorIdInput"></a>

```java
public java.lang.String getMonitorIdInput();
```

- *Type:* java.lang.String

---

##### `resultContentTypeInput`<sup>Optional</sup> <a name="resultContentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultContentTypeInput"></a>

```java
public java.lang.String getResultContentTypeInput();
```

- *Type:* java.lang.String

---

##### `resultTypeInput`<sup>Optional</sup> <a name="resultTypeInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultTypeInput"></a>

```java
public java.lang.String getResultTypeInput();
```

- *Type:* java.lang.String

---

##### `vantagePointInput`<sup>Optional</sup> <a name="vantagePointInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.vantagePointInput"></a>

```java
public java.lang.String getVantagePointInput();
```

- *Type:* java.lang.String

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.executionTime"></a>

```java
public java.lang.String getExecutionTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `resultContentType`<sup>Required</sup> <a name="resultContentType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultContentType"></a>

```java
public java.lang.String getResultContentType();
```

- *Type:* java.lang.String

---

##### `resultType`<sup>Required</sup> <a name="resultType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.resultType"></a>

```java
public java.lang.String getResultType();
```

- *Type:* java.lang.String

---

##### `vantagePoint`<sup>Required</sup> <a name="vantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.vantagePoint"></a>

```java
public java.lang.String getVantagePoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResult.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsResultConfig <a name="DataOciApmSyntheticsResultConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResultConfig;

DataOciApmSyntheticsResultConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .apmDomainId(java.lang.String)
    .executionTime(java.lang.String)
    .monitorId(java.lang.String)
    .resultContentType(java.lang.String)
    .resultType(java.lang.String)
    .vantagePoint(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.apmDomainId">apmDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#apm_domain_id DataOciApmSyntheticsResult#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.executionTime">executionTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#execution_time DataOciApmSyntheticsResult#execution_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#monitor_id DataOciApmSyntheticsResult#monitor_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.resultContentType">resultContentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_content_type DataOciApmSyntheticsResult#result_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.resultType">resultType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_type DataOciApmSyntheticsResult#result_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.vantagePoint">vantagePoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#vantage_point DataOciApmSyntheticsResult#vantage_point}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#id DataOciApmSyntheticsResult#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.apmDomainId"></a>

```java
public java.lang.String getApmDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#apm_domain_id DataOciApmSyntheticsResult#apm_domain_id}.

---

##### `executionTime`<sup>Required</sup> <a name="executionTime" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.executionTime"></a>

```java
public java.lang.String getExecutionTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#execution_time DataOciApmSyntheticsResult#execution_time}.

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#monitor_id DataOciApmSyntheticsResult#monitor_id}.

---

##### `resultContentType`<sup>Required</sup> <a name="resultContentType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.resultContentType"></a>

```java
public java.lang.String getResultContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_content_type DataOciApmSyntheticsResult#result_content_type}.

---

##### `resultType`<sup>Required</sup> <a name="resultType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.resultType"></a>

```java
public java.lang.String getResultType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#result_type DataOciApmSyntheticsResult#result_type}.

---

##### `vantagePoint`<sup>Required</sup> <a name="vantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.vantagePoint"></a>

```java
public java.lang.String getVantagePoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#vantage_point DataOciApmSyntheticsResult#vantage_point}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_result#id DataOciApmSyntheticsResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciApmSyntheticsResultResultDataSet <a name="DataOciApmSyntheticsResultResultDataSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSet"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResultResultDataSet;

DataOciApmSyntheticsResultResultDataSet.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsResultResultDataSetList <a name="DataOciApmSyntheticsResultResultDataSetList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResultResultDataSetList;

new DataOciApmSyntheticsResultResultDataSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.get"></a>

```java
public DataOciApmSyntheticsResultResultDataSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciApmSyntheticsResultResultDataSetOutputReference <a name="DataOciApmSyntheticsResultResultDataSetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_apm_synthetics_result.DataOciApmSyntheticsResultResultDataSetOutputReference;

new DataOciApmSyntheticsResultResultDataSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.byteContent">byteContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.stringContent">stringContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSet">DataOciApmSyntheticsResultResultDataSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `byteContent`<sup>Required</sup> <a name="byteContent" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.byteContent"></a>

```java
public java.lang.String getByteContent();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stringContent`<sup>Required</sup> <a name="stringContent" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.stringContent"></a>

```java
public java.lang.String getStringContent();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSetOutputReference.property.internalValue"></a>

```java
public DataOciApmSyntheticsResultResultDataSet getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsResult.DataOciApmSyntheticsResultResultDataSet">DataOciApmSyntheticsResultResultDataSet</a>

---




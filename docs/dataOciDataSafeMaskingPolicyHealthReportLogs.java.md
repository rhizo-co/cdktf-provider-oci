# `dataOciDataSafeMaskingPolicyHealthReportLogs` Submodule <a name="`dataOciDataSafeMaskingPolicyHealthReportLogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogs <a name="DataOciDataSafeMaskingPolicyHealthReportLogs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs oci_data_safe_masking_policy_health_report_logs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogs;

DataOciDataSafeMaskingPolicyHealthReportLogs.Builder.create(Construct scope, java.lang.String id)
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
    .maskingPolicyHealthReportId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeMaskingPolicyHealthReportLogsFilter>)
//  .id(java.lang.String)
//  .messageType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.maskingPolicyHealthReportId">maskingPolicyHealthReportId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.messageType">messageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maskingPolicyHealthReportId`<sup>Required</sup> <a name="maskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.maskingPolicyHealthReportId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#filter DataOciDataSafeMaskingPolicyHealthReportLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.messageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetMessageType">resetMessageType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeMaskingPolicyHealthReportLogsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetId"></a>

```java
public void resetId()
```

##### `resetMessageType` <a name="resetMessageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetMessageType"></a>

```java
public void resetMessageType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReportLogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogs;

DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogs;

DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogs;

DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogs;

DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReportLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReportLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeMaskingPolicyHealthReportLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReportLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList">DataOciDataSafeMaskingPolicyHealthReportLogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportLogCollection">maskingPolicyHealthReportLogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportIdInput">maskingPolicyHealthReportIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageTypeInput">messageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportId">maskingPolicyHealthReportId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageType">messageType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filter"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList">DataOciDataSafeMaskingPolicyHealthReportLogsFilterList</a>

---

##### `maskingPolicyHealthReportLogCollection`<sup>Required</sup> <a name="maskingPolicyHealthReportLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportLogCollection"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList getMaskingPolicyHealthReportLogCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maskingPolicyHealthReportIdInput`<sup>Optional</sup> <a name="maskingPolicyHealthReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportIdInput"></a>

```java
public java.lang.String getMaskingPolicyHealthReportIdInput();
```

- *Type:* java.lang.String

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageTypeInput"></a>

```java
public java.lang.String getMessageTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maskingPolicyHealthReportId`<sup>Required</sup> <a name="maskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportId"></a>

```java
public java.lang.String getMaskingPolicyHealthReportId();
```

- *Type:* java.lang.String

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogsConfig <a name="DataOciDataSafeMaskingPolicyHealthReportLogsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig;

DataOciDataSafeMaskingPolicyHealthReportLogsConfig.builder()
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
    .maskingPolicyHealthReportId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeMaskingPolicyHealthReportLogsFilter>)
//  .id(java.lang.String)
//  .messageType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.maskingPolicyHealthReportId">maskingPolicyHealthReportId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.messageType">messageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maskingPolicyHealthReportId`<sup>Required</sup> <a name="maskingPolicyHealthReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.maskingPolicyHealthReportId"></a>

```java
public java.lang.String getMaskingPolicyHealthReportId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#filter DataOciDataSafeMaskingPolicyHealthReportLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messageType`<sup>Optional</sup> <a name="messageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}.

---

### DataOciDataSafeMaskingPolicyHealthReportLogsFilter <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter;

DataOciDataSafeMaskingPolicyHealthReportLogsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#name DataOciDataSafeMaskingPolicyHealthReportLogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#values DataOciDataSafeMaskingPolicyHealthReportLogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#regex DataOciDataSafeMaskingPolicyHealthReportLogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#name DataOciDataSafeMaskingPolicyHealthReportLogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#values DataOciDataSafeMaskingPolicyHealthReportLogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#regex DataOciDataSafeMaskingPolicyHealthReportLogs#regex}.

---

### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection;

DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection.builder()
    .build();
```


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems;

DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogsFilterList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList;

new DataOciDataSafeMaskingPolicyHealthReportLogsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>>

---


### DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference;

new DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList;

new DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference;

new DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.messageType">messageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.remediation">remediation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.remediation"></a>

```java
public java.lang.String getRemediation();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList;

new DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policy_health_report_logs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference;

new DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection</a>

---




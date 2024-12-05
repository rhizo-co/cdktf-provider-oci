# `dataOciHealthChecksHttpProbeResults` Submodule <a name="`dataOciHealthChecksHttpProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksHttpProbeResults <a name="DataOciHealthChecksHttpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results oci_health_checks_http_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResults;

DataOciHealthChecksHttpProbeResults.Builder.create(Construct scope, java.lang.String id)
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
    .probeConfigurationId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciHealthChecksHttpProbeResultsFilter>)
//  .id(java.lang.String)
//  .startTimeGreaterThanOrEqualTo(java.lang.Number)
//  .startTimeLessThanOrEqualTo(java.lang.Number)
//  .target(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.probeConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#filter DataOciHealthChecksHttpProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}.

---

##### `startTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeGreaterThanOrEqualTo">resetStartTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeLessThanOrEqualTo">resetStartTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciHealthChecksHttpProbeResultsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetId"></a>

```java
public void resetId()
```

##### `resetStartTimeGreaterThanOrEqualTo` <a name="resetStartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```java
public void resetStartTimeGreaterThanOrEqualTo()
```

##### `resetStartTimeLessThanOrEqualTo` <a name="resetStartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```java
public void resetStartTimeLessThanOrEqualTo()
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetTarget"></a>

```java
public void resetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksHttpProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResults;

DataOciHealthChecksHttpProbeResults.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResults;

DataOciHealthChecksHttpProbeResults.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResults;

DataOciHealthChecksHttpProbeResults.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResults;

DataOciHealthChecksHttpProbeResults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciHealthChecksHttpProbeResults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciHealthChecksHttpProbeResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciHealthChecksHttpProbeResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciHealthChecksHttpProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksHttpProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList">DataOciHealthChecksHttpProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.httpProbeResults">httpProbeResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationIdInput">probeConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualToInput">startTimeGreaterThanOrEqualToInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualToInput">startTimeLessThanOrEqualToInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filter"></a>

```java
public DataOciHealthChecksHttpProbeResultsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList">DataOciHealthChecksHttpProbeResultsFilterList</a>

---

##### `httpProbeResults`<sup>Required</sup> <a name="httpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.httpProbeResults"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsList getHttpProbeResults();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `probeConfigurationIdInput`<sup>Optional</sup> <a name="probeConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationIdInput"></a>

```java
public java.lang.String getProbeConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `startTimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```java
public java.lang.Number getStartTimeGreaterThanOrEqualToInput();
```

- *Type:* java.lang.Number

---

##### `startTimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```java
public java.lang.Number getStartTimeLessThanOrEqualToInput();
```

- *Type:* java.lang.Number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationId"></a>

```java
public java.lang.String getProbeConfigurationId();
```

- *Type:* java.lang.String

---

##### `startTimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.Number

---

##### `startTimeLessThanOrEqualTo`<sup>Required</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeLessThanOrEqualTo();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksHttpProbeResultsConfig <a name="DataOciHealthChecksHttpProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsConfig;

DataOciHealthChecksHttpProbeResultsConfig.builder()
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
    .probeConfigurationId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciHealthChecksHttpProbeResultsFilter>)
//  .id(java.lang.String)
//  .startTimeGreaterThanOrEqualTo(java.lang.Number)
//  .startTimeLessThanOrEqualTo(java.lang.Number)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.probeConfigurationId"></a>

```java
public java.lang.String getProbeConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#filter DataOciHealthChecksHttpProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}.

---

##### `startTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeLessThanOrEqualTo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}.

---

### DataOciHealthChecksHttpProbeResultsFilter <a name="DataOciHealthChecksHttpProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsFilter;

DataOciHealthChecksHttpProbeResultsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#name DataOciHealthChecksHttpProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#values DataOciHealthChecksHttpProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#regex DataOciHealthChecksHttpProbeResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#name DataOciHealthChecksHttpProbeResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#values DataOciHealthChecksHttpProbeResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#regex DataOciHealthChecksHttpProbeResults#regex}.

---

### DataOciHealthChecksHttpProbeResultsHttpProbeResults <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResults;

DataOciHealthChecksHttpProbeResultsHttpProbeResults.builder()
    .build();
```


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection;

DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection.builder()
    .build();
```


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns;

DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksHttpProbeResultsFilterList <a name="DataOciHealthChecksHttpProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsFilterList;

new DataOciHealthChecksHttpProbeResultsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get"></a>

```java
public DataOciHealthChecksHttpProbeResultsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>>

---


### DataOciHealthChecksHttpProbeResultsFilterOutputReference <a name="DataOciHealthChecksHttpProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsFilterOutputReference;

new DataOciHealthChecksHttpProbeResultsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList;

new DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference;

new DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.connectDuration">connectDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.secureConnectDuration">secureConnectDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `connectDuration`<sup>Required</sup> <a name="connectDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.connectDuration"></a>

```java
public java.lang.Number getConnectDuration();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secureConnectDuration`<sup>Required</sup> <a name="secureConnectDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.secureConnectDuration"></a>

```java
public java.lang.Number getSecureConnectDuration();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.internalValue"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList;

new DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference;

new DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.domainLookupDuration">domainLookupDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainLookupDuration`<sup>Required</sup> <a name="domainLookupDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```java
public java.lang.Number getDomainLookupDuration();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.internalValue"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList;

new DataOciHealthChecksHttpProbeResultsHttpProbeResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_http_probe_results.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference;

new DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectEnd">connectEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connection">connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectStart">connectStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupEnd">domainLookupEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupStart">domainLookupStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.encodedBodySize">encodedBodySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorCategory">errorCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fetchStart">fetchStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isHealthy">isHealthy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isTimedOut">isTimedOut</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.requestStart">requestStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseEnd">responseEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseStart">responseStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.secureConnectionStart">secureConnectionStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.vantagePointName">vantagePointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults">DataOciHealthChecksHttpProbeResultsHttpProbeResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectEnd`<sup>Required</sup> <a name="connectEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectEnd"></a>

```java
public java.lang.Number getConnectEnd();
```

- *Type:* java.lang.Number

---

##### `connection`<sup>Required</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connection"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList getConnection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList</a>

---

##### `connectStart`<sup>Required</sup> <a name="connectStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectStart"></a>

```java
public java.lang.Number getConnectStart();
```

- *Type:* java.lang.Number

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.dns"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList getDns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList</a>

---

##### `domainLookupEnd`<sup>Required</sup> <a name="domainLookupEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupEnd"></a>

```java
public java.lang.Number getDomainLookupEnd();
```

- *Type:* java.lang.Number

---

##### `domainLookupStart`<sup>Required</sup> <a name="domainLookupStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupStart"></a>

```java
public java.lang.Number getDomainLookupStart();
```

- *Type:* java.lang.Number

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `encodedBodySize`<sup>Required</sup> <a name="encodedBodySize" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.encodedBodySize"></a>

```java
public java.lang.Number getEncodedBodySize();
```

- *Type:* java.lang.Number

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorCategory"></a>

```java
public java.lang.String getErrorCategory();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `fetchStart`<sup>Required</sup> <a name="fetchStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fetchStart"></a>

```java
public java.lang.Number getFetchStart();
```

- *Type:* java.lang.Number

---

##### `isHealthy`<sup>Required</sup> <a name="isHealthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isHealthy"></a>

```java
public IResolvable getIsHealthy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isTimedOut`<sup>Required</sup> <a name="isTimedOut" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isTimedOut"></a>

```java
public IResolvable getIsTimedOut();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.probeConfigurationId"></a>

```java
public java.lang.String getProbeConfigurationId();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `requestStart`<sup>Required</sup> <a name="requestStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.requestStart"></a>

```java
public java.lang.Number getRequestStart();
```

- *Type:* java.lang.Number

---

##### `responseEnd`<sup>Required</sup> <a name="responseEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseEnd"></a>

```java
public java.lang.Number getResponseEnd();
```

- *Type:* java.lang.Number

---

##### `responseStart`<sup>Required</sup> <a name="responseStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseStart"></a>

```java
public java.lang.Number getResponseStart();
```

- *Type:* java.lang.Number

---

##### `secureConnectionStart`<sup>Required</sup> <a name="secureConnectionStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.secureConnectionStart"></a>

```java
public java.lang.Number getSecureConnectionStart();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `vantagePointName`<sup>Required</sup> <a name="vantagePointName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.vantagePointName"></a>

```java
public java.lang.String getVantagePointName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.internalValue"></a>

```java
public DataOciHealthChecksHttpProbeResultsHttpProbeResults getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults">DataOciHealthChecksHttpProbeResultsHttpProbeResults</a>

---




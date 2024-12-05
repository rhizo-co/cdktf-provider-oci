# `dataOciHealthChecksPingProbeResults` Submodule <a name="`dataOciHealthChecksPingProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksPingProbeResults <a name="DataOciHealthChecksPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results oci_health_checks_ping_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResults;

DataOciHealthChecksPingProbeResults.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciHealthChecksPingProbeResultsFilter>)
//  .id(java.lang.String)
//  .startTimeGreaterThanOrEqualTo(java.lang.Number)
//  .startTimeLessThanOrEqualTo(java.lang.Number)
//  .target(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.probeConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeGreaterThanOrEqualTo"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}.

---

##### `startTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.startTimeLessThanOrEqualTo"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo">resetStartTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo">resetStartTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciHealthChecksPingProbeResultsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId"></a>

```java
public void resetId()
```

##### `resetStartTimeGreaterThanOrEqualTo` <a name="resetStartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```java
public void resetStartTimeGreaterThanOrEqualTo()
```

##### `resetStartTimeLessThanOrEqualTo` <a name="resetStartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```java
public void resetStartTimeLessThanOrEqualTo()
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget"></a>

```java
public void resetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResults;

DataOciHealthChecksPingProbeResults.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResults;

DataOciHealthChecksPingProbeResults.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResults;

DataOciHealthChecksPingProbeResults.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResults;

DataOciHealthChecksPingProbeResults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciHealthChecksPingProbeResults.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciHealthChecksPingProbeResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciHealthChecksPingProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksPingProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults">pingProbeResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput">probeConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput">startTimeGreaterThanOrEqualToInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput">startTimeLessThanOrEqualToInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter"></a>

```java
public DataOciHealthChecksPingProbeResultsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a>

---

##### `pingProbeResults`<sup>Required</sup> <a name="pingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsList getPingProbeResults();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `probeConfigurationIdInput`<sup>Optional</sup> <a name="probeConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput"></a>

```java
public java.lang.String getProbeConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `startTimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```java
public java.lang.Number getStartTimeGreaterThanOrEqualToInput();
```

- *Type:* java.lang.Number

---

##### `startTimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```java
public java.lang.Number getStartTimeLessThanOrEqualToInput();
```

- *Type:* java.lang.Number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId"></a>

```java
public java.lang.String getProbeConfigurationId();
```

- *Type:* java.lang.String

---

##### `startTimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.Number

---

##### `startTimeLessThanOrEqualTo`<sup>Required</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeLessThanOrEqualTo();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksPingProbeResultsConfig <a name="DataOciHealthChecksPingProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsConfig;

DataOciHealthChecksPingProbeResultsConfig.builder()
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
//  .filter(java.util.List<DataOciHealthChecksPingProbeResultsFilter>)
//  .id(java.lang.String)
//  .startTimeGreaterThanOrEqualTo(java.lang.Number)
//  .startTimeLessThanOrEqualTo(java.lang.Number)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId"></a>

```java
public java.lang.String getProbeConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}.

---

##### `startTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```java
public java.lang.Number getStartTimeLessThanOrEqualTo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}.

---

### DataOciHealthChecksPingProbeResultsFilter <a name="DataOciHealthChecksPingProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsFilter;

DataOciHealthChecksPingProbeResultsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}.

---

### DataOciHealthChecksPingProbeResultsPingProbeResults <a name="DataOciHealthChecksPingProbeResultsPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResults;

DataOciHealthChecksPingProbeResultsPingProbeResults.builder()
    .build();
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnection <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection;

DataOciHealthChecksPingProbeResultsPingProbeResultsConnection.builder()
    .build();
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsDns <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsDns;

DataOciHealthChecksPingProbeResultsPingProbeResultsDns.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksPingProbeResultsFilterList <a name="DataOciHealthChecksPingProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsFilterList;

new DataOciHealthChecksPingProbeResultsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get"></a>

```java
public DataOciHealthChecksPingProbeResultsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>>

---


### DataOciHealthChecksPingProbeResultsFilterOutputReference <a name="DataOciHealthChecksPingProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsFilterOutputReference;

new DataOciHealthChecksPingProbeResultsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList;

new DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference;

new DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsConnection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList;

new DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference;

new DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration">domainLookupDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainLookupDuration`<sup>Required</sup> <a name="domainLookupDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```java
public java.lang.Number getDomainLookupDuration();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsDns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsList;

new DataOciHealthChecksPingProbeResultsPingProbeResultsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_health_checks_ping_probe_results.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference;

new DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection">connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd">domainLookupEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart">domainLookupStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory">errorCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy">isHealthy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut">isTimedOut</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs">latencyInMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId">probeConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName">vantagePointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connection`<sup>Required</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList getConnection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a>

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList getDns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a>

---

##### `domainLookupEnd`<sup>Required</sup> <a name="domainLookupEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd"></a>

```java
public java.lang.Number getDomainLookupEnd();
```

- *Type:* java.lang.Number

---

##### `domainLookupStart`<sup>Required</sup> <a name="domainLookupStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart"></a>

```java
public java.lang.Number getDomainLookupStart();
```

- *Type:* java.lang.Number

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory"></a>

```java
public java.lang.String getErrorCategory();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

---

##### `isHealthy`<sup>Required</sup> <a name="isHealthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy"></a>

```java
public IResolvable getIsHealthy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isTimedOut`<sup>Required</sup> <a name="isTimedOut" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut"></a>

```java
public IResolvable getIsTimedOut();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `latencyInMs`<sup>Required</sup> <a name="latencyInMs" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs"></a>

```java
public java.lang.Number getLatencyInMs();
```

- *Type:* java.lang.Number

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId"></a>

```java
public java.lang.String getProbeConfigurationId();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime"></a>

```java
public java.lang.Number getStartTime();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `vantagePointName`<sup>Required</sup> <a name="vantagePointName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName"></a>

```java
public java.lang.String getVantagePointName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue"></a>

```java
public DataOciHealthChecksPingProbeResultsPingProbeResults getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a>

---




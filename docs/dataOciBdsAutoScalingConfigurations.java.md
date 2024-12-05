# `dataOciBdsAutoScalingConfigurations` Submodule <a name="`dataOciBdsAutoScalingConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsAutoScalingConfigurations <a name="DataOciBdsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations oci_bds_auto_scaling_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurations;

DataOciBdsAutoScalingConfigurations.Builder.create(Construct scope, java.lang.String id)
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
    .bdsInstanceId(java.lang.String)
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBdsAutoScalingConfigurationsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.bdsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#filter DataOciBdsAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciBdsAutoScalingConfigurationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsAutoScalingConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurations;

DataOciBdsAutoScalingConfigurations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurations;

DataOciBdsAutoScalingConfigurations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurations;

DataOciBdsAutoScalingConfigurations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurations;

DataOciBdsAutoScalingConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciBdsAutoScalingConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciBdsAutoScalingConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciBdsAutoScalingConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciBdsAutoScalingConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsAutoScalingConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.autoScalingConfigurations">autoScalingConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList">DataOciBdsAutoScalingConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoScalingConfigurations`<sup>Required</sup> <a name="autoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.autoScalingConfigurations"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList getAutoScalingConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filter"></a>

```java
public DataOciBdsAutoScalingConfigurationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList">DataOciBdsAutoScalingConfigurationsFilterList</a>

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceIdInput"></a>

```java
public java.lang.String getBdsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold;

DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold.builder()
    .build();
```


### DataOciBdsAutoScalingConfigurationsConfig <a name="DataOciBdsAutoScalingConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsConfig;

DataOciBdsAutoScalingConfigurationsConfig.builder()
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
    .bdsInstanceId(java.lang.String)
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBdsAutoScalingConfigurationsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#filter DataOciBdsAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}.

---

### DataOciBdsAutoScalingConfigurationsFilter <a name="DataOciBdsAutoScalingConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsFilter;

DataOciBdsAutoScalingConfigurationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#name DataOciBdsAutoScalingConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#values DataOciBdsAutoScalingConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#regex DataOciBdsAutoScalingConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#name DataOciBdsAutoScalingConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#values DataOciBdsAutoScalingConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#regex DataOciBdsAutoScalingConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policyDetails">policyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policy"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList getPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList</a>

---

##### `policyDetails`<sup>Required</sup> <a name="policyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policyDetails"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList getPolicyDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleDownConfig">scaleDownConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleInConfig">scaleInConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleOutConfig">scaleOutConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleUpConfig">scaleUpConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scheduleDetails">scheduleDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.triggerType">triggerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `scaleDownConfig`<sup>Required</sup> <a name="scaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList getScaleDownConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList</a>

---

##### `scaleInConfig`<sup>Required</sup> <a name="scaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleInConfig"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList getScaleInConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList</a>

---

##### `scaleOutConfig`<sup>Required</sup> <a name="scaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList getScaleOutConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList</a>

---

##### `scaleUpConfig`<sup>Required</sup> <a name="scaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList getScaleUpConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList</a>

---

##### `scheduleDetails`<sup>Required</sup> <a name="scheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scheduleDetails"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList getScheduleDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.triggerType"></a>

```java
public java.lang.String getTriggerType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">memoryStepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">minMemoryPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">minOcpusPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">ocpuStepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryStepSize`<sup>Required</sup> <a name="memoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```java
public java.lang.Number getMemoryStepSize();
```

- *Type:* java.lang.Number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList</a>

---

##### `minMemoryPerNode`<sup>Required</sup> <a name="minMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```java
public java.lang.Number getMinMemoryPerNode();
```

- *Type:* java.lang.Number

---

##### `minOcpusPerNode`<sup>Required</sup> <a name="minOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```java
public java.lang.Number getMinOcpusPerNode();
```

- *Type:* java.lang.Number

---

##### `ocpuStepSize`<sup>Required</sup> <a name="ocpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```java
public java.lang.Number getOcpuStepSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.stepSize">stepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList</a>

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `stepSize`<sup>Required</sup> <a name="stepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```java
public java.lang.Number getStepSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.stepSize">stepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList</a>

---

##### `stepSize`<sup>Required</sup> <a name="stepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```java
public java.lang.Number getStepSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">maxMemoryPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">maxOcpusPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">memoryStepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">ocpuStepSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxMemoryPerNode`<sup>Required</sup> <a name="maxMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```java
public java.lang.Number getMaxMemoryPerNode();
```

- *Type:* java.lang.Number

---

##### `maxOcpusPerNode`<sup>Required</sup> <a name="maxOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```java
public java.lang.Number getMaxOcpusPerNode();
```

- *Type:* java.lang.Number

---

##### `memoryStepSize`<sup>Required</sup> <a name="memoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```java
public java.lang.Number getMemoryStepSize();
```

- *Type:* java.lang.Number

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList</a>

---

##### `ocpuStepSize`<sup>Required</sup> <a name="ocpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```java
public java.lang.Number getOcpuStepSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">timeAndHorizontalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">timeAndVerticalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```java
public java.lang.String getScheduleType();
```

- *Type:* java.lang.String

---

##### `timeAndHorizontalScalingConfig`<sup>Required</sup> <a name="timeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList getTimeAndHorizontalScalingConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `timeAndVerticalScalingConfig`<sup>Required</sup> <a name="timeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList getTimeAndVerticalScalingConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">targetNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">timeRecurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetNodeCount`<sup>Required</sup> <a name="targetNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```java
public java.lang.Number getTargetNodeCount();
```

- *Type:* java.lang.Number

---

##### `timeRecurrence`<sup>Required</sup> <a name="timeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```java
public java.lang.String getTimeRecurrence();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">targetMemoryPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">targetOcpusPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">targetShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">timeRecurrence</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetMemoryPerNode`<sup>Required</sup> <a name="targetMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```java
public java.lang.Number getTargetMemoryPerNode();
```

- *Type:* java.lang.Number

---

##### `targetOcpusPerNode`<sup>Required</sup> <a name="targetOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```java
public java.lang.Number getTargetOcpusPerNode();
```

- *Type:* java.lang.Number

---

##### `targetShape`<sup>Required</sup> <a name="targetShape" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```java
public java.lang.String getTargetShape();
```

- *Type:* java.lang.String

---

##### `timeRecurrence`<sup>Required</sup> <a name="timeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```java
public java.lang.String getTimeRecurrence();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.rules"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.threshold"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">durationInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInMinutes`<sup>Required</sup> <a name="durationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```java
public java.lang.Number getDurationInMinutes();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference;

new DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.metric"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.internalValue"></a>

```java
public DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules</a>

---


### DataOciBdsAutoScalingConfigurationsFilterList <a name="DataOciBdsAutoScalingConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsFilterList;

new DataOciBdsAutoScalingConfigurationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get"></a>

```java
public DataOciBdsAutoScalingConfigurationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>>

---


### DataOciBdsAutoScalingConfigurationsFilterOutputReference <a name="DataOciBdsAutoScalingConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_auto_scaling_configurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference;

new DataOciBdsAutoScalingConfigurationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>

---




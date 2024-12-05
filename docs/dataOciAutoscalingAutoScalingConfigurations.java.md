# `dataOciAutoscalingAutoScalingConfigurations` Submodule <a name="`dataOciAutoscalingAutoScalingConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAutoscalingAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations oci_autoscaling_auto_scaling_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurations;

DataOciAutoscalingAutoScalingConfigurations.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciAutoscalingAutoScalingConfigurationsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#filter DataOciAutoscalingAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciAutoscalingAutoScalingConfigurationsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurations;

DataOciAutoscalingAutoScalingConfigurations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurations;

DataOciAutoscalingAutoScalingConfigurations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurations;

DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurations;

DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciAutoscalingAutoScalingConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciAutoscalingAutoScalingConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAutoscalingAutoScalingConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations">autoScalingConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autoScalingConfigurations`<sup>Required</sup> <a name="autoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList getAutoScalingConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold;

DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold.builder()
    .build();
```


### DataOciAutoscalingAutoScalingConfigurationsConfig <a name="DataOciAutoscalingAutoScalingConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsConfig;

DataOciAutoscalingAutoScalingConfigurationsConfig.builder()
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciAutoscalingAutoScalingConfigurationsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#filter DataOciAutoscalingAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAutoscalingAutoScalingConfigurationsFilter <a name="DataOciAutoscalingAutoScalingConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsFilter;

DataOciAutoscalingAutoScalingConfigurationsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources">autoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds">coolDownInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount">maxResourceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount">minResourceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingResources`<sup>Required</sup> <a name="autoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList getAutoScalingResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `coolDownInSeconds`<sup>Required</sup> <a name="coolDownInSeconds" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds"></a>

```java
public java.lang.Number getCoolDownInSeconds();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maxResourceCount`<sup>Required</sup> <a name="maxResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount"></a>

```java
public java.lang.Number getMaxResourceCount();
```

- *Type:* java.lang.Number

---

##### `minResourceCount`<sup>Required</sup> <a name="minResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount"></a>

```java
public java.lang.Number getMinResourceCount();
```

- *Type:* java.lang.Number

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList getPolicies();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial">initial</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initial`<sup>Required</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial"></a>

```java
public java.lang.Number getInitial();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule">executionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled">isEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction">resourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList getCapacity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionSchedule`<sup>Required</sup> <a name="executionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList getExecutionSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `resourceAction`<sup>Required</sup> <a name="resourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList getResourceAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList getAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a>

---


### DataOciAutoscalingAutoScalingConfigurationsFilterList <a name="DataOciAutoscalingAutoScalingConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsFilterList;

new DataOciAutoscalingAutoScalingConfigurationsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get"></a>

```java
public DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>>

---


### DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_autoscaling_auto_scaling_configurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference;

new DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>

---




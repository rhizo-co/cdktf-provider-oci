# `dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivity <a name="DataOciFusionAppsFusionEnvironmentScheduledActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity oci_fusion_apps_fusion_environment_scheduled_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivity;

DataOciFusionAppsFusionEnvironmentScheduledActivity.Builder.create(Construct scope, java.lang.String id)
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
    .fusionEnvironmentId(java.lang.String)
    .scheduledActivityId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scheduledActivityId">scheduledActivityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}.

---

##### `scheduledActivityId`<sup>Required</sup> <a name="scheduledActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scheduledActivityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivity;

DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivity;

DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivity;

DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivity;

DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours">delayInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle">runCycle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability">serviceAvailability</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish">timeExpectedFinish</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished">timeFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart">timeScheduledStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput">scheduledActivityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId">scheduledActivityId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions"></a>

```java
public DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList getActions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a>

---

##### `delayInHours`<sup>Required</sup> <a name="delayInHours" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours"></a>

```java
public java.lang.Number getDelayInHours();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `runCycle`<sup>Required</sup> <a name="runCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle"></a>

```java
public java.lang.String getRunCycle();
```

- *Type:* java.lang.String

---

##### `serviceAvailability`<sup>Required</sup> <a name="serviceAvailability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability"></a>

```java
public java.lang.String getServiceAvailability();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeExpectedFinish`<sup>Required</sup> <a name="timeExpectedFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish"></a>

```java
public java.lang.String getTimeExpectedFinish();
```

- *Type:* java.lang.String

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished"></a>

```java
public java.lang.String getTimeFinished();
```

- *Type:* java.lang.String

---

##### `timeScheduledStart`<sup>Required</sup> <a name="timeScheduledStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart"></a>

```java
public java.lang.String getTimeScheduledStart();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput"></a>

```java
public java.lang.String getFusionEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `scheduledActivityIdInput`<sup>Optional</sup> <a name="scheduledActivityIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput"></a>

```java
public java.lang.String getScheduledActivityIdInput();
```

- *Type:* java.lang.String

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId"></a>

```java
public java.lang.String getFusionEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scheduledActivityId`<sup>Required</sup> <a name="scheduledActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId"></a>

```java
public java.lang.String getScheduledActivityId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActions <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions;

DataOciFusionAppsFusionEnvironmentScheduledActivityActions.builder()
    .build();
```


### DataOciFusionAppsFusionEnvironmentScheduledActivityConfig <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig;

DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.builder()
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
    .fusionEnvironmentId(java.lang.String)
    .scheduledActivityId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId">scheduledActivityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId"></a>

```java
public java.lang.String getFusionEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}.

---

##### `scheduledActivityId`<sup>Required</sup> <a name="scheduledActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId"></a>

```java
public java.lang.String getScheduledActivityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList;

new DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get"></a>

```java
public DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_fusion_apps_fusion_environment_scheduled_activity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference;

new DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact">artifact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey">referenceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact"></a>

```java
public java.lang.String getArtifact();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

##### `referenceKey`<sup>Required</sup> <a name="referenceKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey"></a>

```java
public java.lang.String getReferenceKey();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue"></a>

```java
public DataOciFusionAppsFusionEnvironmentScheduledActivityActions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a>

---




# `osmanagementManagedInstanceManagement` Submodule <a name="`osmanagementManagedInstanceManagement` Submodule" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsmanagementManagedInstanceManagement <a name="OsmanagementManagedInstanceManagement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management oci_osmanagement_managed_instance_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagement;

OsmanagementManagedInstanceManagement.Builder.create(Construct scope, java.lang.String id)
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
    .managedInstanceId(java.lang.String)
//  .childSoftwareSources(IResolvable)
//  .childSoftwareSources(java.util.List<OsmanagementManagedInstanceManagementChildSoftwareSources>)
//  .id(java.lang.String)
//  .managedInstanceGroups(IResolvable)
//  .managedInstanceGroups(java.util.List<OsmanagementManagedInstanceManagementManagedInstanceGroups>)
//  .parentSoftwareSource(OsmanagementManagedInstanceManagementParentSoftwareSource)
//  .timeouts(OsmanagementManagedInstanceManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.childSoftwareSources">childSoftwareSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>></code> | child_software_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceGroups">managedInstanceGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>></code> | managed_instance_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.parentSoftwareSource">parentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | parent_software_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}.

---

##### `childSoftwareSources`<sup>Optional</sup> <a name="childSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.childSoftwareSources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>>

child_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#child_software_sources OsmanagementManagedInstanceManagement#child_software_sources}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedInstanceGroups`<sup>Optional</sup> <a name="managedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.managedInstanceGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>>

managed_instance_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_groups OsmanagementManagedInstanceManagement#managed_instance_groups}

---

##### `parentSoftwareSource`<sup>Optional</sup> <a name="parentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.parentSoftwareSource"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

parent_software_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#parent_software_source OsmanagementManagedInstanceManagement#parent_software_source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#timeouts OsmanagementManagedInstanceManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources">putChildSoftwareSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups">putManagedInstanceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource">putParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources">resetChildSoftwareSources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups">resetManagedInstanceGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource">resetParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChildSoftwareSources` <a name="putChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources"></a>

```java
public void putChildSoftwareSources(IResolvable OR java.util.List<OsmanagementManagedInstanceManagementChildSoftwareSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putChildSoftwareSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>>

---

##### `putManagedInstanceGroups` <a name="putManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups"></a>

```java
public void putManagedInstanceGroups(IResolvable OR java.util.List<OsmanagementManagedInstanceManagementManagedInstanceGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putManagedInstanceGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>>

---

##### `putParentSoftwareSource` <a name="putParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource"></a>

```java
public void putParentSoftwareSource(OsmanagementManagedInstanceManagementParentSoftwareSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putParentSoftwareSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts"></a>

```java
public void putTimeouts(OsmanagementManagedInstanceManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

---

##### `resetChildSoftwareSources` <a name="resetChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetChildSoftwareSources"></a>

```java
public void resetChildSoftwareSources()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetId"></a>

```java
public void resetId()
```

##### `resetManagedInstanceGroups` <a name="resetManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetManagedInstanceGroups"></a>

```java
public void resetManagedInstanceGroups()
```

##### `resetParentSoftwareSource` <a name="resetParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetParentSoftwareSource"></a>

```java
public void resetParentSoftwareSource()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagement;

OsmanagementManagedInstanceManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagement;

OsmanagementManagedInstanceManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagement;

OsmanagementManagedInstanceManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagement;

OsmanagementManagedInstanceManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsmanagementManagedInstanceManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsmanagementManagedInstanceManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsmanagementManagedInstanceManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsmanagementManagedInstanceManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsmanagementManagedInstanceManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources">childSoftwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot">lastBoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin">lastCheckin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups">managedInstanceGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion">osKernelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName">osName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource">parentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable">updatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput">childSoftwareSourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput">managedInstanceGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput">parentSoftwareSourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `childSoftwareSources`<sup>Required</sup> <a name="childSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSources"></a>

```java
public OsmanagementManagedInstanceManagementChildSoftwareSourcesList getChildSoftwareSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList">OsmanagementManagedInstanceManagementChildSoftwareSourcesList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lastBoot`<sup>Required</sup> <a name="lastBoot" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastBoot"></a>

```java
public java.lang.String getLastBoot();
```

- *Type:* java.lang.String

---

##### `lastCheckin`<sup>Required</sup> <a name="lastCheckin" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.lastCheckin"></a>

```java
public java.lang.String getLastCheckin();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroups`<sup>Required</sup> <a name="managedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroups"></a>

```java
public OsmanagementManagedInstanceManagementManagedInstanceGroupsList getManagedInstanceGroups();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList">OsmanagementManagedInstanceManagementManagedInstanceGroupsList</a>

---

##### `osKernelVersion`<sup>Required</sup> <a name="osKernelVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osKernelVersion"></a>

```java
public java.lang.String getOsKernelVersion();
```

- *Type:* java.lang.String

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osName"></a>

```java
public java.lang.String getOsName();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

##### `parentSoftwareSource`<sup>Required</sup> <a name="parentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSource"></a>

```java
public OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference getParentSoftwareSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference">OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeouts"></a>

```java
public OsmanagementManagedInstanceManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference">OsmanagementManagedInstanceManagementTimeoutsOutputReference</a>

---

##### `updatesAvailable`<sup>Required</sup> <a name="updatesAvailable" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.updatesAvailable"></a>

```java
public java.lang.Number getUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `childSoftwareSourcesInput`<sup>Optional</sup> <a name="childSoftwareSourcesInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.childSoftwareSourcesInput"></a>

```java
public java.lang.Object getChildSoftwareSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroupsInput`<sup>Optional</sup> <a name="managedInstanceGroupsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceGroupsInput"></a>

```java
public java.lang.Object getManagedInstanceGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>>

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `parentSoftwareSourceInput`<sup>Optional</sup> <a name="parentSoftwareSourceInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.parentSoftwareSourceInput"></a>

```java
public OsmanagementManagedInstanceManagementParentSoftwareSource getParentSoftwareSourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSources <a name="OsmanagementManagedInstanceManagementChildSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementChildSoftwareSources;

OsmanagementManagedInstanceManagementChildSoftwareSources.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementConfig <a name="OsmanagementManagedInstanceManagementConfig" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementConfig;

OsmanagementManagedInstanceManagementConfig.builder()
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
    .managedInstanceId(java.lang.String)
//  .childSoftwareSources(IResolvable)
//  .childSoftwareSources(java.util.List<OsmanagementManagedInstanceManagementChildSoftwareSources>)
//  .id(java.lang.String)
//  .managedInstanceGroups(IResolvable)
//  .managedInstanceGroups(java.util.List<OsmanagementManagedInstanceManagementManagedInstanceGroups>)
//  .parentSoftwareSource(OsmanagementManagedInstanceManagementParentSoftwareSource)
//  .timeouts(OsmanagementManagedInstanceManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources">childSoftwareSources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>></code> | child_software_sources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups">managedInstanceGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>></code> | managed_instance_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource">parentSoftwareSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | parent_software_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_id OsmanagementManagedInstanceManagement#managed_instance_id}.

---

##### `childSoftwareSources`<sup>Optional</sup> <a name="childSoftwareSources" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.childSoftwareSources"></a>

```java
public java.lang.Object getChildSoftwareSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>>

child_software_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#child_software_sources OsmanagementManagedInstanceManagement#child_software_sources}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedInstanceGroups`<sup>Optional</sup> <a name="managedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.managedInstanceGroups"></a>

```java
public java.lang.Object getManagedInstanceGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>>

managed_instance_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#managed_instance_groups OsmanagementManagedInstanceManagement#managed_instance_groups}

---

##### `parentSoftwareSource`<sup>Optional</sup> <a name="parentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.parentSoftwareSource"></a>

```java
public OsmanagementManagedInstanceManagementParentSoftwareSource getParentSoftwareSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

parent_software_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#parent_software_source OsmanagementManagedInstanceManagement#parent_software_source}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementConfig.property.timeouts"></a>

```java
public OsmanagementManagedInstanceManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#timeouts OsmanagementManagedInstanceManagement#timeouts}

---

### OsmanagementManagedInstanceManagementManagedInstanceGroups <a name="OsmanagementManagedInstanceManagementManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementManagedInstanceGroups;

OsmanagementManagedInstanceManagementManagedInstanceGroups.builder()
//  .displayName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#display_name OsmanagementManagedInstanceManagement#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OsmanagementManagedInstanceManagementParentSoftwareSource <a name="OsmanagementManagedInstanceManagementParentSoftwareSource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementParentSoftwareSource;

OsmanagementManagedInstanceManagementParentSoftwareSource.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#id OsmanagementManagedInstanceManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#name OsmanagementManagedInstanceManagement#name}.

---

### OsmanagementManagedInstanceManagementTimeouts <a name="OsmanagementManagedInstanceManagementTimeouts" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementTimeouts;

OsmanagementManagedInstanceManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#create OsmanagementManagedInstanceManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#delete OsmanagementManagedInstanceManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osmanagement_managed_instance_management#update OsmanagementManagedInstanceManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsmanagementManagedInstanceManagementChildSoftwareSourcesList <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementChildSoftwareSourcesList;

new OsmanagementManagedInstanceManagementChildSoftwareSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get"></a>

```java
public OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>>

---


### OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference <a name="OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference;

new OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementChildSoftwareSources">OsmanagementManagedInstanceManagementChildSoftwareSources</a>

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsList <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsList" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementManagedInstanceGroupsList;

new OsmanagementManagedInstanceManagementManagedInstanceGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get"></a>

```java
public OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>>

---


### OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference <a name="OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference;

new OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementManagedInstanceGroups">OsmanagementManagedInstanceManagementManagedInstanceGroups</a>

---


### OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference <a name="OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference;

new OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSourceOutputReference.property.internalValue"></a>

```java
public OsmanagementManagedInstanceManagementParentSoftwareSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementParentSoftwareSource">OsmanagementManagedInstanceManagementParentSoftwareSource</a>

---


### OsmanagementManagedInstanceManagementTimeoutsOutputReference <a name="OsmanagementManagedInstanceManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osmanagement_managed_instance_management.OsmanagementManagedInstanceManagementTimeoutsOutputReference;

new OsmanagementManagedInstanceManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osmanagementManagedInstanceManagement.OsmanagementManagedInstanceManagementTimeouts">OsmanagementManagedInstanceManagementTimeouts</a>

---




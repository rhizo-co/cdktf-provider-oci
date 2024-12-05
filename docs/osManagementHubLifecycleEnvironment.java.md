# `osManagementHubLifecycleEnvironment` Submodule <a name="`osManagementHubLifecycleEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubLifecycleEnvironment <a name="OsManagementHubLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment oci_os_management_hub_lifecycle_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironment;

OsManagementHubLifecycleEnvironment.Builder.create(Construct scope, java.lang.String id)
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
    .archType(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .osFamily(java.lang.String)
    .stages(IResolvable)
    .stages(java.util.List<OsManagementHubLifecycleEnvironmentStages>)
    .vendorName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(OsManagementHubLifecycleEnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.osFamily">osFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.stages">stages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>></code> | stages block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.archType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}.

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.osFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}.

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.stages"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#stages OsManagementHubLifecycleEnvironment#stages}

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.vendorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#timeouts OsManagementHubLifecycleEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages">putStages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putStages` <a name="putStages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages"></a>

```java
public void putStages(IResolvable OR java.util.List<OsManagementHubLifecycleEnvironmentStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putStages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts"></a>

```java
public void putTimeouts(OsManagementHubLifecycleEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironment;

OsManagementHubLifecycleEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironment;

OsManagementHubLifecycleEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironment;

OsManagementHubLifecycleEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironment;

OsManagementHubLifecycleEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OsManagementHubLifecycleEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OsManagementHubLifecycleEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OsManagementHubLifecycleEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OsManagementHubLifecycleEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubLifecycleEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.managedInstanceIds">managedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stages">stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList">OsManagementHubLifecycleEnvironmentStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeModified">timeModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference">OsManagementHubLifecycleEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archTypeInput">archTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamilyInput">osFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stagesInput">stagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorNameInput">vendorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.managedInstanceIds"></a>

```java
public OsManagementHubLifecycleEnvironmentManagedInstanceIdsList getManagedInstanceIds();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentManagedInstanceIdsList</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stages"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesList getStages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList">OsManagementHubLifecycleEnvironmentStagesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeModified"></a>

```java
public java.lang.String getTimeModified();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeouts"></a>

```java
public OsManagementHubLifecycleEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference">OsManagementHubLifecycleEnvironmentTimeoutsOutputReference</a>

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archTypeInput"></a>

```java
public java.lang.String getArchTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamilyInput"></a>

```java
public java.lang.String getOsFamilyInput();
```

- *Type:* java.lang.String

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.stagesInput"></a>

```java
public java.lang.Object getStagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

---

##### `vendorNameInput`<sup>Optional</sup> <a name="vendorNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorNameInput"></a>

```java
public java.lang.String getVendorNameInput();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubLifecycleEnvironmentConfig <a name="OsManagementHubLifecycleEnvironmentConfig" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentConfig;

OsManagementHubLifecycleEnvironmentConfig.builder()
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
    .archType(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .osFamily(java.lang.String)
    .stages(IResolvable)
    .stages(java.util.List<OsManagementHubLifecycleEnvironmentStages>)
    .vendorName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(OsManagementHubLifecycleEnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.stages">stages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>></code> | stages block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#arch_type OsManagementHubLifecycleEnvironment#arch_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}.

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#os_family OsManagementHubLifecycleEnvironment#os_family}.

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.stages"></a>

```java
public java.lang.Object getStages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#stages OsManagementHubLifecycleEnvironment#stages}

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#vendor_name OsManagementHubLifecycleEnvironment#vendor_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#description OsManagementHubLifecycleEnvironment#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#id OsManagementHubLifecycleEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#location OsManagementHubLifecycleEnvironment#location}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentConfig.property.timeouts"></a>

```java
public OsManagementHubLifecycleEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#timeouts OsManagementHubLifecycleEnvironment#timeouts}

---

### OsManagementHubLifecycleEnvironmentManagedInstanceIds <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentManagedInstanceIds;

OsManagementHubLifecycleEnvironmentManagedInstanceIds.builder()
    .build();
```


### OsManagementHubLifecycleEnvironmentStages <a name="OsManagementHubLifecycleEnvironmentStages" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStages;

OsManagementHubLifecycleEnvironmentStages.builder()
    .displayName(java.lang.String)
    .rank(java.lang.Number)
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.rank">rank</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#rank OsManagementHubLifecycleEnvironment#rank}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#display_name OsManagementHubLifecycleEnvironment#display_name}.

---

##### `rank`<sup>Required</sup> <a name="rank" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#rank OsManagementHubLifecycleEnvironment#rank}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#compartment_id OsManagementHubLifecycleEnvironment#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#defined_tags OsManagementHubLifecycleEnvironment#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#freeform_tags OsManagementHubLifecycleEnvironment#freeform_tags}.

---

### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds;

OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds.builder()
    .build();
```


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId;

OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId.builder()
    .build();
```


### OsManagementHubLifecycleEnvironmentTimeouts <a name="OsManagementHubLifecycleEnvironmentTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentTimeouts;

OsManagementHubLifecycleEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#create OsManagementHubLifecycleEnvironment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#delete OsManagementHubLifecycleEnvironment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#update OsManagementHubLifecycleEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#create OsManagementHubLifecycleEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#delete OsManagementHubLifecycleEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_lifecycle_environment#update OsManagementHubLifecycleEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubLifecycleEnvironmentManagedInstanceIdsList <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList;

new OsManagementHubLifecycleEnvironmentManagedInstanceIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get"></a>

```java
public OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference <a name="OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference;

new OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds">OsManagementHubLifecycleEnvironmentManagedInstanceIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIdsOutputReference.property.internalValue"></a>

```java
public OsManagementHubLifecycleEnvironmentManagedInstanceIds getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentManagedInstanceIds">OsManagementHubLifecycleEnvironmentManagedInstanceIds</a>

---


### OsManagementHubLifecycleEnvironmentStagesList <a name="OsManagementHubLifecycleEnvironmentStagesList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesList;

new OsManagementHubLifecycleEnvironmentStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>>

---


### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList;

new OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference;

new OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsOutputReference.property.internalValue"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIds</a>

---


### OsManagementHubLifecycleEnvironmentStagesOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesOutputReference;

new OsManagementHubLifecycleEnvironmentStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds">managedInstanceIds</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified">timeModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rankInput">rankInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank">rank</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleEnvironmentId`<sup>Required</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.lifecycleEnvironmentId"></a>

```java
public java.lang.String getLifecycleEnvironmentId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.managedInstanceIds"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList getManagedInstanceIds();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList">OsManagementHubLifecycleEnvironmentStagesManagedInstanceIdsList</a>

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.softwareSourceId"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList getSoftwareSourceId();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.timeModified"></a>

```java
public java.lang.String getTimeModified();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rankInput`<sup>Optional</sup> <a name="rankInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rankInput"></a>

```java
public java.lang.Number getRankInput();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rank`<sup>Required</sup> <a name="rank" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.rank"></a>

```java
public java.lang.Number getRank();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStages">OsManagementHubLifecycleEnvironmentStages</a>

---


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList;

new OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference <a name="OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference;

new OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```java
public IResolvable getIsMandatoryForAutonomousLinux();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```java
public java.lang.String getSoftwareSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceIdOutputReference.property.internalValue"></a>

```java
public OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId">OsManagementHubLifecycleEnvironmentStagesSoftwareSourceId</a>

---


### OsManagementHubLifecycleEnvironmentTimeoutsOutputReference <a name="OsManagementHubLifecycleEnvironmentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.os_management_hub_lifecycle_environment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference;

new OsManagementHubLifecycleEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.osManagementHubLifecycleEnvironment.OsManagementHubLifecycleEnvironmentTimeouts">OsManagementHubLifecycleEnvironmentTimeouts</a>

---




# `dataOciOsManagementHubManagedInstanceGroups` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroups <a name="DataOciOsManagementHubManagedInstanceGroups" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups oci_os_management_hub_managed_instance_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroups;

DataOciOsManagementHubManagedInstanceGroups.Builder.create(Construct scope, java.lang.String id)
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
//  .archType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubManagedInstanceGroupsFilter>)
//  .id(java.lang.String)
//  .isManagedByAutonomousLinux(java.lang.Boolean)
//  .isManagedByAutonomousLinux(IResolvable)
//  .location(java.util.List<java.lang.String>)
//  .locationNotEqualTo(java.util.List<java.lang.String>)
//  .managedInstanceGroupId(java.lang.String)
//  .osFamily(java.lang.String)
//  .softwareSourceId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.location">location</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.locationNotEqualTo">locationNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.osFamily">osFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.archType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.displayNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#filter DataOciOsManagementHubManagedInstanceGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagedByAutonomousLinux`<sup>Optional</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.isManagedByAutonomousLinux"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.location"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}.

---

##### `locationNotEqualTo`<sup>Optional</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.locationNotEqualTo"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}.

---

##### `managedInstanceGroupId`<sup>Optional</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.osFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.softwareSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetArchType">resetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetIsManagedByAutonomousLinux">resetIsManagedByAutonomousLinux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocationNotEqualTo">resetLocationNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetManagedInstanceGroupId">resetManagedInstanceGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsManagementHubManagedInstanceGroupsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>>

---

##### `resetArchType` <a name="resetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetArchType"></a>

```java
public void resetArchType()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetDisplayNameContains"></a>

```java
public void resetDisplayNameContains()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetId"></a>

```java
public void resetId()
```

##### `resetIsManagedByAutonomousLinux` <a name="resetIsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetIsManagedByAutonomousLinux"></a>

```java
public void resetIsManagedByAutonomousLinux()
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetLocationNotEqualTo` <a name="resetLocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetLocationNotEqualTo"></a>

```java
public void resetLocationNotEqualTo()
```

##### `resetManagedInstanceGroupId` <a name="resetManagedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetManagedInstanceGroupId"></a>

```java
public void resetManagedInstanceGroupId()
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetOsFamily"></a>

```java
public void resetOsFamily()
```

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetSoftwareSourceId"></a>

```java
public void resetSoftwareSourceId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroups;

DataOciOsManagementHubManagedInstanceGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroups;

DataOciOsManagementHubManagedInstanceGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroups;

DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroups;

DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsManagementHubManagedInstanceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList">DataOciOsManagementHubManagedInstanceGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupCollection">managedInstanceGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archTypeInput">archTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameInput">displayNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinuxInput">isManagedByAutonomousLinuxInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationInput">locationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualToInput">locationNotEqualToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupIdInput">managedInstanceGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamilyInput">osFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filter"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList">DataOciOsManagementHubManagedInstanceGroupsFilterList</a>

---

##### `managedInstanceGroupCollection`<sup>Required</sup> <a name="managedInstanceGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupCollection"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList getManagedInstanceGroupCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList</a>

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archTypeInput"></a>

```java
public java.lang.String getArchTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContainsInput"></a>

```java
public java.lang.String getDisplayNameContainsInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isManagedByAutonomousLinuxInput`<sup>Optional</sup> <a name="isManagedByAutonomousLinuxInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinuxInput"></a>

```java
public java.lang.Object getIsManagedByAutonomousLinuxInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationInput"></a>

```java
public java.util.List<java.lang.String> getLocationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationNotEqualToInput`<sup>Optional</sup> <a name="locationNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualToInput"></a>

```java
public java.util.List<java.lang.String> getLocationNotEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managedInstanceGroupIdInput`<sup>Optional</sup> <a name="managedInstanceGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupIdInput"></a>

```java
public java.lang.String getManagedInstanceGroupIdInput();
```

- *Type:* java.lang.String

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamilyInput"></a>

```java
public java.lang.String getOsFamilyInput();
```

- *Type:* java.lang.String

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceIdInput"></a>

```java
public java.lang.String getSoftwareSourceIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.isManagedByAutonomousLinux"></a>

```java
public java.lang.Object getIsManagedByAutonomousLinux();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationNotEqualTo`<sup>Required</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.locationNotEqualTo"></a>

```java
public java.util.List<java.lang.String> getLocationNotEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managedInstanceGroupId`<sup>Required</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.softwareSourceId"></a>

```java
public java.lang.String getSoftwareSourceId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupsConfig <a name="DataOciOsManagementHubManagedInstanceGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsConfig;

DataOciOsManagementHubManagedInstanceGroupsConfig.builder()
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
//  .archType(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubManagedInstanceGroupsFilter>)
//  .id(java.lang.String)
//  .isManagedByAutonomousLinux(java.lang.Boolean)
//  .isManagedByAutonomousLinux(IResolvable)
//  .location(java.util.List<java.lang.String>)
//  .locationNotEqualTo(java.util.List<java.lang.String>)
//  .managedInstanceGroupId(java.lang.String)
//  .osFamily(java.lang.String)
//  .softwareSourceId(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.archType">archType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.managedInstanceGroupId">managedInstanceGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#arch_type DataOciOsManagementHubManagedInstanceGroups#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#compartment_id DataOciOsManagementHubManagedInstanceGroups#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name DataOciOsManagementHubManagedInstanceGroups#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#display_name_contains DataOciOsManagementHubManagedInstanceGroups#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#filter DataOciOsManagementHubManagedInstanceGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#id DataOciOsManagementHubManagedInstanceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagedByAutonomousLinux`<sup>Optional</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.isManagedByAutonomousLinux"></a>

```java
public java.lang.Object getIsManagedByAutonomousLinux();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstanceGroups#is_managed_by_autonomous_linux}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location DataOciOsManagementHubManagedInstanceGroups#location}.

---

##### `locationNotEqualTo`<sup>Optional</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.locationNotEqualTo"></a>

```java
public java.util.List<java.lang.String> getLocationNotEqualTo();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#location_not_equal_to DataOciOsManagementHubManagedInstanceGroups#location_not_equal_to}.

---

##### `managedInstanceGroupId`<sup>Optional</sup> <a name="managedInstanceGroupId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.managedInstanceGroupId"></a>

```java
public java.lang.String getManagedInstanceGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroups#managed_instance_group_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#os_family DataOciOsManagementHubManagedInstanceGroups#os_family}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.softwareSourceId"></a>

```java
public java.lang.String getSoftwareSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#software_source_id DataOciOsManagementHubManagedInstanceGroups#software_source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#state DataOciOsManagementHubManagedInstanceGroups#state}.

---

### DataOciOsManagementHubManagedInstanceGroupsFilter <a name="DataOciOsManagementHubManagedInstanceGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsFilter;

DataOciOsManagementHubManagedInstanceGroupsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#name DataOciOsManagementHubManagedInstanceGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#values DataOciOsManagementHubManagedInstanceGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#regex DataOciOsManagementHubManagedInstanceGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#name DataOciOsManagementHubManagedInstanceGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#values DataOciOsManagementHubManagedInstanceGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_groups#regex DataOciOsManagementHubManagedInstanceGroups#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection;

DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection.builder()
    .build();
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems;

DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems.builder()
    .build();
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings;

DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings.builder()
    .build();
```


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources;

DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupsFilterList <a name="DataOciOsManagementHubManagedInstanceGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsFilterList;

new DataOciOsManagementHubManagedInstanceGroupsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>>

---


### DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference;

new DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsFilter">DataOciOsManagementHubManagedInstanceGroupsFilter</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized">isDataCollectionAuthorized</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId">scheduledJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDataCollectionAuthorized`<sup>Required</sup> <a name="isDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized"></a>

```java
public IResolvable getIsDataCollectionAuthorized();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `scheduledJobId`<sup>Required</sup> <a name="scheduledJobId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId"></a>

```java
public java.lang.String getScheduledJobId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettings</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.archType">archType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.autonomousSettings">autonomousSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceCount">managedInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceIds">managedInstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.pendingJobCount">pendingJobCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSourceIds">softwareSourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeModified">timeModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.archType"></a>

```java
public java.lang.String getArchType();
```

- *Type:* java.lang.String

---

##### `autonomousSettings`<sup>Required</sup> <a name="autonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.autonomousSettings"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList getAutonomousSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsAutonomousSettingsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```java
public IResolvable getIsManagedByAutonomousLinux();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedInstanceCount`<sup>Required</sup> <a name="managedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceCount"></a>

```java
public java.lang.Number getManagedInstanceCount();
```

- *Type:* java.lang.Number

---

##### `managedInstanceIds`<sup>Required</sup> <a name="managedInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.managedInstanceIds"></a>

```java
public java.util.List<java.lang.String> getManagedInstanceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.notificationTopicId"></a>

```java
public java.lang.String getNotificationTopicId();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `pendingJobCount`<sup>Required</sup> <a name="pendingJobCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.pendingJobCount"></a>

```java
public java.lang.Number getPendingJobCount();
```

- *Type:* java.lang.Number

---

##### `softwareSourceIds`<sup>Required</sup> <a name="softwareSourceIds" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSourceIds"></a>

```java
public java.util.List<java.lang.String> getSoftwareSourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.softwareSources"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList getSoftwareSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.timeModified"></a>

```java
public java.lang.String getTimeModified();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```java
public IResolvable getIsMandatoryForAutonomousLinux();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```java
public java.lang.String getSoftwareSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instance_groups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference;

new DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.items"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroups.DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection">DataOciOsManagementHubManagedInstanceGroupsManagedInstanceGroupCollection</a>

---




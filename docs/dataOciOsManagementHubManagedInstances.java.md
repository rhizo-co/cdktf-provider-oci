# `dataOciOsManagementHubManagedInstances` Submodule <a name="`dataOciOsManagementHubManagedInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstances <a name="DataOciOsManagementHubManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances oci_os_management_hub_managed_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstances;

DataOciOsManagementHubManagedInstances.Builder.create(Construct scope, java.lang.String id)
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
//  .advisoryName(java.util.List<java.lang.String>)
//  .archType(java.util.List<java.lang.String>)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubManagedInstancesFilter>)
//  .group(java.lang.String)
//  .groupNotEqualTo(java.lang.String)
//  .id(java.lang.String)
//  .isAttachedToGroupOrLifecycleStage(java.lang.Boolean)
//  .isAttachedToGroupOrLifecycleStage(IResolvable)
//  .isManagedByAutonomousLinux(java.lang.Boolean)
//  .isManagedByAutonomousLinux(IResolvable)
//  .isManagementStation(java.lang.Boolean)
//  .isManagementStation(IResolvable)
//  .isProfileAttached(java.lang.Boolean)
//  .isProfileAttached(IResolvable)
//  .lifecycleEnvironment(java.lang.String)
//  .lifecycleEnvironmentNotEqualTo(java.lang.String)
//  .lifecycleStage(java.lang.String)
//  .lifecycleStageNotEqualTo(java.lang.String)
//  .location(java.util.List<java.lang.String>)
//  .locationNotEqualTo(java.util.List<java.lang.String>)
//  .managedInstanceId(java.lang.String)
//  .osFamily(java.util.List<java.lang.String>)
//  .profile(java.util.List<java.lang.String>)
//  .profileNotEqualTo(java.util.List<java.lang.String>)
//  .softwareSourceId(java.lang.String)
//  .status(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.advisoryName">advisoryName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.archType">archType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.groupNotEqualTo">groupNotEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isAttachedToGroupOrLifecycleStage">isAttachedToGroupOrLifecycleStage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagementStation">isManagementStation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isProfileAttached">isProfileAttached</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironment">lifecycleEnvironment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironmentNotEqualTo">lifecycleEnvironmentNotEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStageNotEqualTo">lifecycleStageNotEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.location">location</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.locationNotEqualTo">locationNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profile">profile</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profileNotEqualTo">profileNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advisoryName`<sup>Optional</sup> <a name="advisoryName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.advisoryName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}.

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.archType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.displayNameContains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#filter DataOciOsManagementHubManagedInstances#filter}

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.group"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}.

---

##### `groupNotEqualTo`<sup>Optional</sup> <a name="groupNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.groupNotEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAttachedToGroupOrLifecycleStage`<sup>Optional</sup> <a name="isAttachedToGroupOrLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isAttachedToGroupOrLifecycleStage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}.

---

##### `isManagedByAutonomousLinux`<sup>Optional</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagedByAutonomousLinux"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}.

---

##### `isManagementStation`<sup>Optional</sup> <a name="isManagementStation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isManagementStation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}.

---

##### `isProfileAttached`<sup>Optional</sup> <a name="isProfileAttached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.isProfileAttached"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}.

---

##### `lifecycleEnvironment`<sup>Optional</sup> <a name="lifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}.

---

##### `lifecycleEnvironmentNotEqualTo`<sup>Optional</sup> <a name="lifecycleEnvironmentNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleEnvironmentNotEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}.

---

##### `lifecycleStage`<sup>Optional</sup> <a name="lifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}.

---

##### `lifecycleStageNotEqualTo`<sup>Optional</sup> <a name="lifecycleStageNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.lifecycleStageNotEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.location"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}.

---

##### `locationNotEqualTo`<sup>Optional</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.locationNotEqualTo"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.managedInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.osFamily"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profile"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}.

---

##### `profileNotEqualTo`<sup>Optional</sup> <a name="profileNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.profileNotEqualTo"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.softwareSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.Initializer.parameter.status"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetAdvisoryName">resetAdvisoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetArchType">resetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroupNotEqualTo">resetGroupNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsAttachedToGroupOrLifecycleStage">resetIsAttachedToGroupOrLifecycleStage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagedByAutonomousLinux">resetIsManagedByAutonomousLinux</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagementStation">resetIsManagementStation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsProfileAttached">resetIsProfileAttached</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironment">resetLifecycleEnvironment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironmentNotEqualTo">resetLifecycleEnvironmentNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStage">resetLifecycleStage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStageNotEqualTo">resetLifecycleStageNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocationNotEqualTo">resetLocationNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetManagedInstanceId">resetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfileNotEqualTo">resetProfileNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetSoftwareSourceId">resetSoftwareSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsManagementHubManagedInstancesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>>

---

##### `resetAdvisoryName` <a name="resetAdvisoryName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetAdvisoryName"></a>

```java
public void resetAdvisoryName()
```

##### `resetArchType` <a name="resetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetArchType"></a>

```java
public void resetArchType()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetDisplayNameContains"></a>

```java
public void resetDisplayNameContains()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroup` <a name="resetGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetGroupNotEqualTo` <a name="resetGroupNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetGroupNotEqualTo"></a>

```java
public void resetGroupNotEqualTo()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetId"></a>

```java
public void resetId()
```

##### `resetIsAttachedToGroupOrLifecycleStage` <a name="resetIsAttachedToGroupOrLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsAttachedToGroupOrLifecycleStage"></a>

```java
public void resetIsAttachedToGroupOrLifecycleStage()
```

##### `resetIsManagedByAutonomousLinux` <a name="resetIsManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagedByAutonomousLinux"></a>

```java
public void resetIsManagedByAutonomousLinux()
```

##### `resetIsManagementStation` <a name="resetIsManagementStation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsManagementStation"></a>

```java
public void resetIsManagementStation()
```

##### `resetIsProfileAttached` <a name="resetIsProfileAttached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetIsProfileAttached"></a>

```java
public void resetIsProfileAttached()
```

##### `resetLifecycleEnvironment` <a name="resetLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironment"></a>

```java
public void resetLifecycleEnvironment()
```

##### `resetLifecycleEnvironmentNotEqualTo` <a name="resetLifecycleEnvironmentNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleEnvironmentNotEqualTo"></a>

```java
public void resetLifecycleEnvironmentNotEqualTo()
```

##### `resetLifecycleStage` <a name="resetLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStage"></a>

```java
public void resetLifecycleStage()
```

##### `resetLifecycleStageNotEqualTo` <a name="resetLifecycleStageNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLifecycleStageNotEqualTo"></a>

```java
public void resetLifecycleStageNotEqualTo()
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetLocationNotEqualTo` <a name="resetLocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetLocationNotEqualTo"></a>

```java
public void resetLocationNotEqualTo()
```

##### `resetManagedInstanceId` <a name="resetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetManagedInstanceId"></a>

```java
public void resetManagedInstanceId()
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetOsFamily"></a>

```java
public void resetOsFamily()
```

##### `resetProfile` <a name="resetProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetProfileNotEqualTo` <a name="resetProfileNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetProfileNotEqualTo"></a>

```java
public void resetProfileNotEqualTo()
```

##### `resetSoftwareSourceId` <a name="resetSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetSoftwareSourceId"></a>

```java
public void resetSoftwareSourceId()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstances;

DataOciOsManagementHubManagedInstances.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstances;

DataOciOsManagementHubManagedInstances.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstances;

DataOciOsManagementHubManagedInstances.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstances;

DataOciOsManagementHubManagedInstances.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsManagementHubManagedInstances.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsManagementHubManagedInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsManagementHubManagedInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList">DataOciOsManagementHubManagedInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceCollection">managedInstanceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryNameInput">advisoryNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archTypeInput">archTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameInput">displayNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualToInput">groupNotEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStageInput">isAttachedToGroupOrLifecycleStageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinuxInput">isManagedByAutonomousLinuxInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStationInput">isManagementStationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttachedInput">isProfileAttachedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentInput">lifecycleEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualToInput">lifecycleEnvironmentNotEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageInput">lifecycleStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualToInput">lifecycleStageNotEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationInput">locationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualToInput">locationNotEqualToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamilyInput">osFamilyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileInput">profileInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualToInput">profileNotEqualToInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.statusInput">statusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryName">advisoryName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archType">archType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualTo">groupNotEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStage">isAttachedToGroupOrLifecycleStage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStation">isManagementStation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttached">isProfileAttached</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironment">lifecycleEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualTo">lifecycleEnvironmentNotEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualTo">lifecycleStageNotEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profile">profile</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualTo">profileNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filter"></a>

```java
public DataOciOsManagementHubManagedInstancesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList">DataOciOsManagementHubManagedInstancesFilterList</a>

---

##### `managedInstanceCollection`<sup>Required</sup> <a name="managedInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceCollection"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList getManagedInstanceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList</a>

---

##### `advisoryNameInput`<sup>Optional</sup> <a name="advisoryNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryNameInput"></a>

```java
public java.util.List<java.lang.String> getAdvisoryNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archTypeInput"></a>

```java
public java.util.List<java.lang.String> getArchTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContainsInput"></a>

```java
public java.lang.String getDisplayNameContainsInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameInput"></a>

```java
public java.util.List<java.lang.String> getDisplayNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `groupNotEqualToInput`<sup>Optional</sup> <a name="groupNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualToInput"></a>

```java
public java.lang.String getGroupNotEqualToInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAttachedToGroupOrLifecycleStageInput`<sup>Optional</sup> <a name="isAttachedToGroupOrLifecycleStageInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStageInput"></a>

```java
public java.lang.Object getIsAttachedToGroupOrLifecycleStageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isManagedByAutonomousLinuxInput`<sup>Optional</sup> <a name="isManagedByAutonomousLinuxInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinuxInput"></a>

```java
public java.lang.Object getIsManagedByAutonomousLinuxInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isManagementStationInput`<sup>Optional</sup> <a name="isManagementStationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStationInput"></a>

```java
public java.lang.Object getIsManagementStationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isProfileAttachedInput`<sup>Optional</sup> <a name="isProfileAttachedInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttachedInput"></a>

```java
public java.lang.Object getIsProfileAttachedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lifecycleEnvironmentInput`<sup>Optional</sup> <a name="lifecycleEnvironmentInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentInput"></a>

```java
public java.lang.String getLifecycleEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `lifecycleEnvironmentNotEqualToInput`<sup>Optional</sup> <a name="lifecycleEnvironmentNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualToInput"></a>

```java
public java.lang.String getLifecycleEnvironmentNotEqualToInput();
```

- *Type:* java.lang.String

---

##### `lifecycleStageInput`<sup>Optional</sup> <a name="lifecycleStageInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageInput"></a>

```java
public java.lang.String getLifecycleStageInput();
```

- *Type:* java.lang.String

---

##### `lifecycleStageNotEqualToInput`<sup>Optional</sup> <a name="lifecycleStageNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualToInput"></a>

```java
public java.lang.String getLifecycleStageNotEqualToInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationInput"></a>

```java
public java.util.List<java.lang.String> getLocationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationNotEqualToInput`<sup>Optional</sup> <a name="locationNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualToInput"></a>

```java
public java.util.List<java.lang.String> getLocationNotEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceIdInput"></a>

```java
public java.lang.String getManagedInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamilyInput"></a>

```java
public java.util.List<java.lang.String> getOsFamilyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileInput"></a>

```java
public java.util.List<java.lang.String> getProfileInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profileNotEqualToInput`<sup>Optional</sup> <a name="profileNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualToInput"></a>

```java
public java.util.List<java.lang.String> getProfileNotEqualToInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceIdInput"></a>

```java
public java.lang.String getSoftwareSourceIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.statusInput"></a>

```java
public java.util.List<java.lang.String> getStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `advisoryName`<sup>Required</sup> <a name="advisoryName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.advisoryName"></a>

```java
public java.util.List<java.lang.String> getAdvisoryName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.archType"></a>

```java
public java.util.List<java.lang.String> getArchType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `groupNotEqualTo`<sup>Required</sup> <a name="groupNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.groupNotEqualTo"></a>

```java
public java.lang.String getGroupNotEqualTo();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAttachedToGroupOrLifecycleStage`<sup>Required</sup> <a name="isAttachedToGroupOrLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isAttachedToGroupOrLifecycleStage"></a>

```java
public java.lang.Object getIsAttachedToGroupOrLifecycleStage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagedByAutonomousLinux"></a>

```java
public java.lang.Object getIsManagedByAutonomousLinux();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isManagementStation`<sup>Required</sup> <a name="isManagementStation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isManagementStation"></a>

```java
public java.lang.Object getIsManagementStation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isProfileAttached`<sup>Required</sup> <a name="isProfileAttached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.isProfileAttached"></a>

```java
public java.lang.Object getIsProfileAttached();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lifecycleEnvironment`<sup>Required</sup> <a name="lifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironment"></a>

```java
public java.lang.String getLifecycleEnvironment();
```

- *Type:* java.lang.String

---

##### `lifecycleEnvironmentNotEqualTo`<sup>Required</sup> <a name="lifecycleEnvironmentNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleEnvironmentNotEqualTo"></a>

```java
public java.lang.String getLifecycleEnvironmentNotEqualTo();
```

- *Type:* java.lang.String

---

##### `lifecycleStage`<sup>Required</sup> <a name="lifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStage"></a>

```java
public java.lang.String getLifecycleStage();
```

- *Type:* java.lang.String

---

##### `lifecycleStageNotEqualTo`<sup>Required</sup> <a name="lifecycleStageNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.lifecycleStageNotEqualTo"></a>

```java
public java.lang.String getLifecycleStageNotEqualTo();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationNotEqualTo`<sup>Required</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.locationNotEqualTo"></a>

```java
public java.util.List<java.lang.String> getLocationNotEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.osFamily"></a>

```java
public java.util.List<java.lang.String> getOsFamily();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profile"></a>

```java
public java.util.List<java.lang.String> getProfile();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profileNotEqualTo`<sup>Required</sup> <a name="profileNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.profileNotEqualTo"></a>

```java
public java.util.List<java.lang.String> getProfileNotEqualTo();
```

- *Type:* java.util.List<java.lang.String>

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.softwareSourceId"></a>

```java
public java.lang.String getSoftwareSourceId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstances.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstancesConfig <a name="DataOciOsManagementHubManagedInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesConfig;

DataOciOsManagementHubManagedInstancesConfig.builder()
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
//  .advisoryName(java.util.List<java.lang.String>)
//  .archType(java.util.List<java.lang.String>)
//  .compartmentId(java.lang.String)
//  .displayName(java.util.List<java.lang.String>)
//  .displayNameContains(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOsManagementHubManagedInstancesFilter>)
//  .group(java.lang.String)
//  .groupNotEqualTo(java.lang.String)
//  .id(java.lang.String)
//  .isAttachedToGroupOrLifecycleStage(java.lang.Boolean)
//  .isAttachedToGroupOrLifecycleStage(IResolvable)
//  .isManagedByAutonomousLinux(java.lang.Boolean)
//  .isManagedByAutonomousLinux(IResolvable)
//  .isManagementStation(java.lang.Boolean)
//  .isManagementStation(IResolvable)
//  .isProfileAttached(java.lang.Boolean)
//  .isProfileAttached(IResolvable)
//  .lifecycleEnvironment(java.lang.String)
//  .lifecycleEnvironmentNotEqualTo(java.lang.String)
//  .lifecycleStage(java.lang.String)
//  .lifecycleStageNotEqualTo(java.lang.String)
//  .location(java.util.List<java.lang.String>)
//  .locationNotEqualTo(java.util.List<java.lang.String>)
//  .managedInstanceId(java.lang.String)
//  .osFamily(java.util.List<java.lang.String>)
//  .profile(java.util.List<java.lang.String>)
//  .profileNotEqualTo(java.util.List<java.lang.String>)
//  .softwareSourceId(java.lang.String)
//  .status(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.advisoryName">advisoryName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.archType">archType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayName">displayName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayNameContains">displayNameContains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.group">group</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.groupNotEqualTo">groupNotEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isAttachedToGroupOrLifecycleStage">isAttachedToGroupOrLifecycleStage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagementStation">isManagementStation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isProfileAttached">isProfileAttached</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironment">lifecycleEnvironment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironmentNotEqualTo">lifecycleEnvironmentNotEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStage">lifecycleStage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStageNotEqualTo">lifecycleStageNotEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.location">location</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.osFamily">osFamily</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profile">profile</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profileNotEqualTo">profileNotEqualTo</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `advisoryName`<sup>Optional</sup> <a name="advisoryName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.advisoryName"></a>

```java
public java.util.List<java.lang.String> getAdvisoryName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#advisory_name DataOciOsManagementHubManagedInstances#advisory_name}.

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.archType"></a>

```java
public java.util.List<java.lang.String> getArchType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#arch_type DataOciOsManagementHubManagedInstances#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#compartment_id DataOciOsManagementHubManagedInstances#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayName"></a>

```java
public java.util.List<java.lang.String> getDisplayName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name DataOciOsManagementHubManagedInstances#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.displayNameContains"></a>

```java
public java.lang.String getDisplayNameContains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#display_name_contains DataOciOsManagementHubManagedInstances#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#filter DataOciOsManagementHubManagedInstances#filter}

---

##### `group`<sup>Optional</sup> <a name="group" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group DataOciOsManagementHubManagedInstances#group}.

---

##### `groupNotEqualTo`<sup>Optional</sup> <a name="groupNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.groupNotEqualTo"></a>

```java
public java.lang.String getGroupNotEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#group_not_equal_to DataOciOsManagementHubManagedInstances#group_not_equal_to}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#id DataOciOsManagementHubManagedInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAttachedToGroupOrLifecycleStage`<sup>Optional</sup> <a name="isAttachedToGroupOrLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isAttachedToGroupOrLifecycleStage"></a>

```java
public java.lang.Object getIsAttachedToGroupOrLifecycleStage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_attached_to_group_or_lifecycle_stage DataOciOsManagementHubManagedInstances#is_attached_to_group_or_lifecycle_stage}.

---

##### `isManagedByAutonomousLinux`<sup>Optional</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagedByAutonomousLinux"></a>

```java
public java.lang.Object getIsManagedByAutonomousLinux();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_managed_by_autonomous_linux DataOciOsManagementHubManagedInstances#is_managed_by_autonomous_linux}.

---

##### `isManagementStation`<sup>Optional</sup> <a name="isManagementStation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isManagementStation"></a>

```java
public java.lang.Object getIsManagementStation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_management_station DataOciOsManagementHubManagedInstances#is_management_station}.

---

##### `isProfileAttached`<sup>Optional</sup> <a name="isProfileAttached" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.isProfileAttached"></a>

```java
public java.lang.Object getIsProfileAttached();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#is_profile_attached DataOciOsManagementHubManagedInstances#is_profile_attached}.

---

##### `lifecycleEnvironment`<sup>Optional</sup> <a name="lifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironment"></a>

```java
public java.lang.String getLifecycleEnvironment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment DataOciOsManagementHubManagedInstances#lifecycle_environment}.

---

##### `lifecycleEnvironmentNotEqualTo`<sup>Optional</sup> <a name="lifecycleEnvironmentNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleEnvironmentNotEqualTo"></a>

```java
public java.lang.String getLifecycleEnvironmentNotEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_environment_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_environment_not_equal_to}.

---

##### `lifecycleStage`<sup>Optional</sup> <a name="lifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStage"></a>

```java
public java.lang.String getLifecycleStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage DataOciOsManagementHubManagedInstances#lifecycle_stage}.

---

##### `lifecycleStageNotEqualTo`<sup>Optional</sup> <a name="lifecycleStageNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.lifecycleStageNotEqualTo"></a>

```java
public java.lang.String getLifecycleStageNotEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#lifecycle_stage_not_equal_to DataOciOsManagementHubManagedInstances#lifecycle_stage_not_equal_to}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.location"></a>

```java
public java.util.List<java.lang.String> getLocation();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location DataOciOsManagementHubManagedInstances#location}.

---

##### `locationNotEqualTo`<sup>Optional</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.locationNotEqualTo"></a>

```java
public java.util.List<java.lang.String> getLocationNotEqualTo();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#location_not_equal_to DataOciOsManagementHubManagedInstances#location_not_equal_to}.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#managed_instance_id DataOciOsManagementHubManagedInstances#managed_instance_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.osFamily"></a>

```java
public java.util.List<java.lang.String> getOsFamily();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#os_family DataOciOsManagementHubManagedInstances#os_family}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profile"></a>

```java
public java.util.List<java.lang.String> getProfile();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile DataOciOsManagementHubManagedInstances#profile}.

---

##### `profileNotEqualTo`<sup>Optional</sup> <a name="profileNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.profileNotEqualTo"></a>

```java
public java.util.List<java.lang.String> getProfileNotEqualTo();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#profile_not_equal_to DataOciOsManagementHubManagedInstances#profile_not_equal_to}.

---

##### `softwareSourceId`<sup>Optional</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.softwareSourceId"></a>

```java
public java.lang.String getSoftwareSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#software_source_id DataOciOsManagementHubManagedInstances#software_source_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesConfig.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#status DataOciOsManagementHubManagedInstances#status}.

---

### DataOciOsManagementHubManagedInstancesFilter <a name="DataOciOsManagementHubManagedInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesFilter;

DataOciOsManagementHubManagedInstancesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#name DataOciOsManagementHubManagedInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#values DataOciOsManagementHubManagedInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#regex DataOciOsManagementHubManagedInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#name DataOciOsManagementHubManagedInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#values DataOciOsManagementHubManagedInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instances#regex DataOciOsManagementHubManagedInstances#regex}.

---

### DataOciOsManagementHubManagedInstancesManagedInstanceCollection <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection;

DataOciOsManagementHubManagedInstancesManagedInstanceCollection.builder()
    .build();
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems;

DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems.builder()
    .build();
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings;

DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings.builder()
    .build();
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment;

DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment.builder()
    .build();
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage;

DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage.builder()
    .build();
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup;

DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup.builder()
    .build();
```


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources;

DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstancesFilterList <a name="DataOciOsManagementHubManagedInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesFilterList;

new DataOciOsManagementHubManagedInstancesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>>

---


### DataOciOsManagementHubManagedInstancesFilterOutputReference <a name="DataOciOsManagementHubManagedInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesFilterOutputReference;

new DataOciOsManagementHubManagedInstancesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesFilter">DataOciOsManagementHubManagedInstancesFilter</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized">isDataCollectionAuthorized</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId">scheduledJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDataCollectionAuthorized`<sup>Required</sup> <a name="isDataCollectionAuthorized" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.isDataCollectionAuthorized"></a>

```java
public IResolvable getIsDataCollectionAuthorized();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `scheduledJobId`<sup>Required</sup> <a name="scheduledJobId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.scheduledJobId"></a>

```java
public java.lang.String getScheduledJobId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettings</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironment</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStage</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroup</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.autonomousSettings">autonomousSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.bugUpdatesAvailable">bugUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.enhancementUpdatesAvailable">enhancementUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedPackages">installedPackages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedWindowsUpdates">installedWindowsUpdates</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagedByAutonomousLinux">isManagedByAutonomousLinux</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagementStation">isManagementStation</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isRebootRequired">isRebootRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.kspliceEffectiveKernelVersion">kspliceEffectiveKernelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleEnvironment">lifecycleEnvironment</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleStage">lifecycleStage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceGroup">managedInstanceGroup</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.notificationTopicId">notificationTopicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osKernelVersion">osKernelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osName">osName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osVersion">osVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.otherUpdatesAvailable">otherUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.primaryManagementStationId">primaryManagementStationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.scheduledJobCount">scheduledJobCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.secondaryManagementStationId">secondaryManagementStationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.securityUpdatesAvailable">securityUpdatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastBoot">timeLastBoot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastCheckin">timeLastCheckin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.updatesAvailable">updatesAvailable</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.workRequestCount">workRequestCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `autonomousSettings`<sup>Required</sup> <a name="autonomousSettings" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.autonomousSettings"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList getAutonomousSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsAutonomousSettingsList</a>

---

##### `bugUpdatesAvailable`<sup>Required</sup> <a name="bugUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.bugUpdatesAvailable"></a>

```java
public java.lang.Number getBugUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enhancementUpdatesAvailable`<sup>Required</sup> <a name="enhancementUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.enhancementUpdatesAvailable"></a>

```java
public java.lang.Number getEnhancementUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `installedPackages`<sup>Required</sup> <a name="installedPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedPackages"></a>

```java
public java.lang.Number getInstalledPackages();
```

- *Type:* java.lang.Number

---

##### `installedWindowsUpdates`<sup>Required</sup> <a name="installedWindowsUpdates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.installedWindowsUpdates"></a>

```java
public java.lang.Number getInstalledWindowsUpdates();
```

- *Type:* java.lang.Number

---

##### `isManagedByAutonomousLinux`<sup>Required</sup> <a name="isManagedByAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagedByAutonomousLinux"></a>

```java
public IResolvable getIsManagedByAutonomousLinux();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isManagementStation`<sup>Required</sup> <a name="isManagementStation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isManagementStation"></a>

```java
public IResolvable getIsManagementStation();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isRebootRequired`<sup>Required</sup> <a name="isRebootRequired" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.isRebootRequired"></a>

```java
public IResolvable getIsRebootRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kspliceEffectiveKernelVersion`<sup>Required</sup> <a name="kspliceEffectiveKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.kspliceEffectiveKernelVersion"></a>

```java
public java.lang.String getKspliceEffectiveKernelVersion();
```

- *Type:* java.lang.String

---

##### `lifecycleEnvironment`<sup>Required</sup> <a name="lifecycleEnvironment" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleEnvironment"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList getLifecycleEnvironment();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleEnvironmentList</a>

---

##### `lifecycleStage`<sup>Required</sup> <a name="lifecycleStage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.lifecycleStage"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList getLifecycleStage();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsLifecycleStageList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedInstanceGroup`<sup>Required</sup> <a name="managedInstanceGroup" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceGroup"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList getManagedInstanceGroup();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsManagedInstanceGroupList</a>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.managedInstanceId"></a>

```java
public java.lang.String getManagedInstanceId();
```

- *Type:* java.lang.String

---

##### `notificationTopicId`<sup>Required</sup> <a name="notificationTopicId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.notificationTopicId"></a>

```java
public java.lang.String getNotificationTopicId();
```

- *Type:* java.lang.String

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osFamily"></a>

```java
public java.lang.String getOsFamily();
```

- *Type:* java.lang.String

---

##### `osKernelVersion`<sup>Required</sup> <a name="osKernelVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osKernelVersion"></a>

```java
public java.lang.String getOsKernelVersion();
```

- *Type:* java.lang.String

---

##### `osName`<sup>Required</sup> <a name="osName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osName"></a>

```java
public java.lang.String getOsName();
```

- *Type:* java.lang.String

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.osVersion"></a>

```java
public java.lang.String getOsVersion();
```

- *Type:* java.lang.String

---

##### `otherUpdatesAvailable`<sup>Required</sup> <a name="otherUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.otherUpdatesAvailable"></a>

```java
public java.lang.Number getOtherUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `primaryManagementStationId`<sup>Required</sup> <a name="primaryManagementStationId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.primaryManagementStationId"></a>

```java
public java.lang.String getPrimaryManagementStationId();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Required</sup> <a name="profile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `scheduledJobCount`<sup>Required</sup> <a name="scheduledJobCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.scheduledJobCount"></a>

```java
public java.lang.Number getScheduledJobCount();
```

- *Type:* java.lang.Number

---

##### `secondaryManagementStationId`<sup>Required</sup> <a name="secondaryManagementStationId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.secondaryManagementStationId"></a>

```java
public java.lang.String getSecondaryManagementStationId();
```

- *Type:* java.lang.String

---

##### `securityUpdatesAvailable`<sup>Required</sup> <a name="securityUpdatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.securityUpdatesAvailable"></a>

```java
public java.lang.Number getSecurityUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.softwareSources"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList getSoftwareSources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastBoot`<sup>Required</sup> <a name="timeLastBoot" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastBoot"></a>

```java
public java.lang.String getTimeLastBoot();
```

- *Type:* java.lang.String

---

##### `timeLastCheckin`<sup>Required</sup> <a name="timeLastCheckin" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeLastCheckin"></a>

```java
public java.lang.String getTimeLastCheckin();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `updatesAvailable`<sup>Required</sup> <a name="updatesAvailable" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.updatesAvailable"></a>

```java
public java.lang.Number getUpdatesAvailable();
```

- *Type:* java.lang.Number

---

##### `workRequestCount`<sup>Required</sup> <a name="workRequestCount" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.workRequestCount"></a>

```java
public java.lang.Number getWorkRequestCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItems</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```java
public IResolvable getIsMandatoryForAutonomousLinux();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```java
public java.lang.String getSoftwareSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.get"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference <a name="DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_os_management_hub_managed_instances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference;

new DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection">DataOciOsManagementHubManagedInstancesManagedInstanceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.items"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList">DataOciOsManagementHubManagedInstancesManagedInstanceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOsManagementHubManagedInstancesManagedInstanceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstances.DataOciOsManagementHubManagedInstancesManagedInstanceCollection">DataOciOsManagementHubManagedInstancesManagedInstanceCollection</a>

---




# `psqlDbSystem` Submodule <a name="`psqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.psqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PsqlDbSystem <a name="PsqlDbSystem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system oci_psql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystem;

PsqlDbSystem.Builder.create(Construct scope, java.lang.String id)
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
    .dbVersion(java.lang.String)
    .displayName(java.lang.String)
    .networkDetails(PsqlDbSystemNetworkDetails)
    .shape(java.lang.String)
    .storageDetails(PsqlDbSystemStorageDetails)
//  .applyConfig(java.lang.String)
//  .configId(java.lang.String)
//  .credentials(PsqlDbSystemCredentials)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .instanceMemorySizeInGbs(java.lang.Number)
//  .instanceOcpuCount(java.lang.Number)
//  .instancesDetails(IResolvable)
//  .instancesDetails(java.util.List<PsqlDbSystemInstancesDetails>)
//  .managementPolicy(PsqlDbSystemManagementPolicy)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<PsqlDbSystemPatchOperations>)
//  .source(PsqlDbSystemSource)
//  .systemType(java.lang.String)
//  .timeouts(PsqlDbSystemTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.storageDetails">storageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | storage_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.applyConfig">applyConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.configId">configId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceOcpuCount">instanceOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instancesDetails">instancesDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>></code> | instances_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.managementPolicy">managementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | management_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.systemType">systemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}.

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dbVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.networkDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}.

---

##### `storageDetails`<sup>Required</sup> <a name="storageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.storageDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}

---

##### `applyConfig`<sup>Optional</sup> <a name="applyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.applyConfig"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}.

---

##### `configId`<sup>Optional</sup> <a name="configId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.configId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}.

---

##### `instanceMemorySizeInGbs`<sup>Optional</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceMemorySizeInGbs"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}.

---

##### `instanceOcpuCount`<sup>Optional</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceOcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}.

---

##### `instancesDetails`<sup>Optional</sup> <a name="instancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instancesDetails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>>

instances_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}

---

##### `managementPolicy`<sup>Optional</sup> <a name="managementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.managementPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

management_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.patchOperations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.source"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source PsqlDbSystem#source}

---

##### `systemType`<sup>Optional</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.systemType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#timeouts PsqlDbSystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails">putInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy">putManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails">putNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations">putPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource">putSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails">putStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig">resetApplyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId">resetConfigId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs">resetInstanceMemorySizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount">resetInstanceOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails">resetInstancesDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy">resetManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations">resetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType">resetSystemType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentials` <a name="putCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials"></a>

```java
public void putCredentials(PsqlDbSystemCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `putInstancesDetails` <a name="putInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails"></a>

```java
public void putInstancesDetails(IResolvable OR java.util.List<PsqlDbSystemInstancesDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>>

---

##### `putManagementPolicy` <a name="putManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy"></a>

```java
public void putManagementPolicy(PsqlDbSystemManagementPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `putNetworkDetails` <a name="putNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails"></a>

```java
public void putNetworkDetails(PsqlDbSystemNetworkDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `putPatchOperations` <a name="putPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations"></a>

```java
public void putPatchOperations(IResolvable OR java.util.List<PsqlDbSystemPatchOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>>

---

##### `putSource` <a name="putSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource"></a>

```java
public void putSource(PsqlDbSystemSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `putStorageDetails` <a name="putStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails"></a>

```java
public void putStorageDetails(PsqlDbSystemStorageDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts"></a>

```java
public void putTimeouts(PsqlDbSystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---

##### `resetApplyConfig` <a name="resetApplyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig"></a>

```java
public void resetApplyConfig()
```

##### `resetConfigId` <a name="resetConfigId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId"></a>

```java
public void resetConfigId()
```

##### `resetCredentials` <a name="resetCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetInstanceMemorySizeInGbs` <a name="resetInstanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs"></a>

```java
public void resetInstanceMemorySizeInGbs()
```

##### `resetInstanceOcpuCount` <a name="resetInstanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount"></a>

```java
public void resetInstanceOcpuCount()
```

##### `resetInstancesDetails` <a name="resetInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails"></a>

```java
public void resetInstancesDetails()
```

##### `resetManagementPolicy` <a name="resetManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy"></a>

```java
public void resetManagementPolicy()
```

##### `resetPatchOperations` <a name="resetPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations"></a>

```java
public void resetPatchOperations()
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource"></a>

```java
public void resetSource()
```

##### `resetSystemType` <a name="resetSystemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType"></a>

```java
public void resetSystemType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystem;

PsqlDbSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystem;

PsqlDbSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystem;

PsqlDbSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystem;

PsqlDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PsqlDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PsqlDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PsqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PsqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances">instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails">instancesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy">managementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails">storageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput">applyConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput">configIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput">credentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput">instanceMemorySizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput">instanceOcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput">instancesDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput">managementPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput">networkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput">patchOperationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput">sourceInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput">storageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput">systemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig">applyConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType">systemType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials"></a>

```java
public PsqlDbSystemCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances"></a>

```java
public PsqlDbSystemInstancesList getInstances();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a>

---

##### `instancesDetails`<sup>Required</sup> <a name="instancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails"></a>

```java
public PsqlDbSystemInstancesDetailsList getInstancesDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `managementPolicy`<sup>Required</sup> <a name="managementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy"></a>

```java
public PsqlDbSystemManagementPolicyOutputReference getManagementPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a>

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails"></a>

```java
public PsqlDbSystemNetworkDetailsOutputReference getNetworkDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a>

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations"></a>

```java
public PsqlDbSystemPatchOperationsList getPatchOperations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source"></a>

```java
public PsqlDbSystemSourceOutputReference getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageDetails`<sup>Required</sup> <a name="storageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails"></a>

```java
public PsqlDbSystemStorageDetailsOutputReference getStorageDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts"></a>

```java
public PsqlDbSystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `applyConfigInput`<sup>Optional</sup> <a name="applyConfigInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput"></a>

```java
public java.lang.String getApplyConfigInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput"></a>

```java
public java.lang.String getConfigIdInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput"></a>

```java
public PsqlDbSystemCredentials getCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceMemorySizeInGbsInput`<sup>Optional</sup> <a name="instanceMemorySizeInGbsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput"></a>

```java
public java.lang.Number getInstanceMemorySizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `instanceOcpuCountInput`<sup>Optional</sup> <a name="instanceOcpuCountInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput"></a>

```java
public java.lang.Number getInstanceOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `instancesDetailsInput`<sup>Optional</sup> <a name="instancesDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput"></a>

```java
public java.lang.Object getInstancesDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>>

---

##### `managementPolicyInput`<sup>Optional</sup> <a name="managementPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput"></a>

```java
public PsqlDbSystemManagementPolicy getManagementPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `networkDetailsInput`<sup>Optional</sup> <a name="networkDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput"></a>

```java
public PsqlDbSystemNetworkDetails getNetworkDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `patchOperationsInput`<sup>Optional</sup> <a name="patchOperationsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput"></a>

```java
public java.lang.Object getPatchOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput"></a>

```java
public PsqlDbSystemSource getSourceInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `storageDetailsInput`<sup>Optional</sup> <a name="storageDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput"></a>

```java
public PsqlDbSystemStorageDetails getStorageDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `systemTypeInput`<sup>Optional</sup> <a name="systemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput"></a>

```java
public java.lang.String getSystemTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---

##### `applyConfig`<sup>Required</sup> <a name="applyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig"></a>

```java
public java.lang.String getApplyConfig();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `configId`<sup>Required</sup> <a name="configId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceMemorySizeInGbs`<sup>Required</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs"></a>

```java
public java.lang.Number getInstanceMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `instanceOcpuCount`<sup>Required</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount"></a>

```java
public java.lang.Number getInstanceOcpuCount();
```

- *Type:* java.lang.Number

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PsqlDbSystemConfig <a name="PsqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemConfig;

PsqlDbSystemConfig.builder()
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
    .dbVersion(java.lang.String)
    .displayName(java.lang.String)
    .networkDetails(PsqlDbSystemNetworkDetails)
    .shape(java.lang.String)
    .storageDetails(PsqlDbSystemStorageDetails)
//  .applyConfig(java.lang.String)
//  .configId(java.lang.String)
//  .credentials(PsqlDbSystemCredentials)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .instanceMemorySizeInGbs(java.lang.Number)
//  .instanceOcpuCount(java.lang.Number)
//  .instancesDetails(IResolvable)
//  .instancesDetails(java.util.List<PsqlDbSystemInstancesDetails>)
//  .managementPolicy(PsqlDbSystemManagementPolicy)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<PsqlDbSystemPatchOperations>)
//  .source(PsqlDbSystemSource)
//  .systemType(java.lang.String)
//  .timeouts(PsqlDbSystemTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails">networkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails">storageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | storage_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig">applyConfig</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs">instanceMemorySizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount">instanceOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails">instancesDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>></code> | instances_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy">managementPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | management_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType">systemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}.

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `networkDetails`<sup>Required</sup> <a name="networkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails"></a>

```java
public PsqlDbSystemNetworkDetails getNetworkDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}.

---

##### `storageDetails`<sup>Required</sup> <a name="storageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails"></a>

```java
public PsqlDbSystemStorageDetails getStorageDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}

---

##### `applyConfig`<sup>Optional</sup> <a name="applyConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig"></a>

```java
public java.lang.String getApplyConfig();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}.

---

##### `configId`<sup>Optional</sup> <a name="configId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials"></a>

```java
public PsqlDbSystemCredentials getCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}.

---

##### `instanceMemorySizeInGbs`<sup>Optional</sup> <a name="instanceMemorySizeInGbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs"></a>

```java
public java.lang.Number getInstanceMemorySizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}.

---

##### `instanceOcpuCount`<sup>Optional</sup> <a name="instanceOcpuCount" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount"></a>

```java
public java.lang.Number getInstanceOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}.

---

##### `instancesDetails`<sup>Optional</sup> <a name="instancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails"></a>

```java
public java.lang.Object getInstancesDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>>

instances_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}

---

##### `managementPolicy`<sup>Optional</sup> <a name="managementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy"></a>

```java
public PsqlDbSystemManagementPolicy getManagementPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

management_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations"></a>

```java
public java.lang.Object getPatchOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source"></a>

```java
public PsqlDbSystemSource getSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source PsqlDbSystem#source}

---

##### `systemType`<sup>Optional</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts"></a>

```java
public PsqlDbSystemTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#timeouts PsqlDbSystem#timeouts}

---

### PsqlDbSystemCredentials <a name="PsqlDbSystemCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemCredentials;

PsqlDbSystemCredentials.builder()
    .passwordDetails(PsqlDbSystemCredentialsPasswordDetails)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails">passwordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | password_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}. |

---

##### `passwordDetails`<sup>Required</sup> <a name="passwordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails"></a>

```java
public PsqlDbSystemCredentialsPasswordDetails getPasswordDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

password_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_details PsqlDbSystem#password_details}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}.

---

### PsqlDbSystemCredentialsPasswordDetails <a name="PsqlDbSystemCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemCredentialsPasswordDetails;

PsqlDbSystemCredentialsPasswordDetails.builder()
    .passwordType(java.lang.String)
//  .password(java.lang.String)
//  .secretId(java.lang.String)
//  .secretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType">passwordType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}. |

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType"></a>

```java
public java.lang.String getPasswordType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}.

---

##### `secretVersion`<sup>Optional</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}.

---

### PsqlDbSystemInstances <a name="PsqlDbSystemInstances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemInstances;

PsqlDbSystemInstances.builder()
    .build();
```


### PsqlDbSystemInstancesDetails <a name="PsqlDbSystemInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemInstancesDetails;

PsqlDbSystemInstancesDetails.builder()
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .privateIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}.

---

### PsqlDbSystemManagementPolicy <a name="PsqlDbSystemManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemManagementPolicy;

PsqlDbSystemManagementPolicy.builder()
//  .backupPolicy(PsqlDbSystemManagementPolicyBackupPolicy)
//  .maintenanceWindowStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}. |

---

##### `backupPolicy`<sup>Optional</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy"></a>

```java
public PsqlDbSystemManagementPolicyBackupPolicy getBackupPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_policy PsqlDbSystem#backup_policy}

---

##### `maintenanceWindowStart`<sup>Optional</sup> <a name="maintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart"></a>

```java
public java.lang.String getMaintenanceWindowStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}.

---

### PsqlDbSystemManagementPolicyBackupPolicy <a name="PsqlDbSystemManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemManagementPolicyBackupPolicy;

PsqlDbSystemManagementPolicyBackupPolicy.builder()
//  .backupStart(java.lang.String)
//  .daysOfTheMonth(java.util.List<java.lang.Number>)
//  .daysOfTheWeek(java.util.List<java.lang.String>)
//  .kind(java.lang.String)
//  .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart">backupStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth">daysOfTheMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}. |

---

##### `backupStart`<sup>Optional</sup> <a name="backupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart"></a>

```java
public java.lang.String getBackupStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}.

---

##### `daysOfTheMonth`<sup>Optional</sup> <a name="daysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfTheMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}.

---

##### `daysOfTheWeek`<sup>Optional</sup> <a name="daysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfTheWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}.

---

### PsqlDbSystemNetworkDetails <a name="PsqlDbSystemNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemNetworkDetails;

PsqlDbSystemNetworkDetails.builder()
    .subnetId(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
//  .primaryDbEndpointPrivateIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp">primaryDbEndpointPrivateIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}.

---

##### `primaryDbEndpointPrivateIp`<sup>Optional</sup> <a name="primaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp"></a>

```java
public java.lang.String getPrimaryDbEndpointPrivateIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}.

---

### PsqlDbSystemPatchOperations <a name="PsqlDbSystemPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemPatchOperations;

PsqlDbSystemPatchOperations.builder()
    .operation(java.lang.String)
    .selection(java.lang.String)
//  .from(java.lang.String)
//  .position(java.lang.String)
//  .selectedItem(java.lang.String)
//  .value(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection">selection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position">position</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem">selectedItem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value">value</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}.

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position"></a>

```java
public java.lang.String getPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}.

---

##### `selectedItem`<sup>Optional</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem"></a>

```java
public java.lang.String getSelectedItem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValue();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}.

---

### PsqlDbSystemSource <a name="PsqlDbSystemSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemSource;

PsqlDbSystemSource.builder()
    .sourceType(java.lang.String)
//  .backupId(java.lang.String)
//  .isHavingRestoreConfigOverrides(java.lang.Boolean)
//  .isHavingRestoreConfigOverrides(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId">backupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides">isHavingRestoreConfigOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}.

---

##### `isHavingRestoreConfigOverrides`<sup>Optional</sup> <a name="isHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides"></a>

```java
public java.lang.Object getIsHavingRestoreConfigOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}.

---

### PsqlDbSystemStorageDetails <a name="PsqlDbSystemStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemStorageDetails;

PsqlDbSystemStorageDetails.builder()
    .isRegionallyDurable(java.lang.Boolean)
    .isRegionallyDurable(IResolvable)
    .systemType(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .iops(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable">isRegionallyDurable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType">systemType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops">iops</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}. |

---

##### `isRegionallyDurable`<sup>Required</sup> <a name="isRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable"></a>

```java
public java.lang.Object getIsRegionallyDurable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}.

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops"></a>

```java
public java.lang.String getIops();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}.

---

### PsqlDbSystemTimeouts <a name="PsqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemTimeouts;

PsqlDbSystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PsqlDbSystemCredentialsOutputReference <a name="PsqlDbSystemCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemCredentialsOutputReference;

new PsqlDbSystemCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails">putPasswordDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPasswordDetails` <a name="putPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails"></a>

```java
public void putPasswordDetails(PsqlDbSystemCredentialsPasswordDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails">passwordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput">passwordDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordDetails`<sup>Required</sup> <a name="passwordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails"></a>

```java
public PsqlDbSystemCredentialsPasswordDetailsOutputReference getPasswordDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a>

---

##### `passwordDetailsInput`<sup>Optional</sup> <a name="passwordDetailsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput"></a>

```java
public PsqlDbSystemCredentialsPasswordDetails getPasswordDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---


### PsqlDbSystemCredentialsPasswordDetailsOutputReference <a name="PsqlDbSystemCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemCredentialsPasswordDetailsOutputReference;

new PsqlDbSystemCredentialsPasswordDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion">resetSecretVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetSecretVersion` <a name="resetSecretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion"></a>

```java
public void resetSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput">passwordTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType">passwordType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordTypeInput`<sup>Optional</sup> <a name="passwordTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput"></a>

```java
public java.lang.String getPasswordTypeInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordType`<sup>Required</sup> <a name="passwordType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```java
public java.lang.String getPasswordType();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemCredentialsPasswordDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


### PsqlDbSystemInstancesDetailsList <a name="PsqlDbSystemInstancesDetailsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemInstancesDetailsList;

new PsqlDbSystemInstancesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get"></a>

```java
public PsqlDbSystemInstancesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>>

---


### PsqlDbSystemInstancesDetailsOutputReference <a name="PsqlDbSystemInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemInstancesDetailsOutputReference;

new PsqlDbSystemInstancesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>

---


### PsqlDbSystemInstancesList <a name="PsqlDbSystemInstancesList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemInstancesList;

new PsqlDbSystemInstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get"></a>

```java
public PsqlDbSystemInstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PsqlDbSystemInstancesOutputReference <a name="PsqlDbSystemInstancesOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemInstancesOutputReference;

new PsqlDbSystemInstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemInstances getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a>

---


### PsqlDbSystemManagementPolicyBackupPolicyOutputReference <a name="PsqlDbSystemManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemManagementPolicyBackupPolicyOutputReference;

new PsqlDbSystemManagementPolicyBackupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart">resetBackupStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth">resetDaysOfTheMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek">resetDaysOfTheWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupStart` <a name="resetBackupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart"></a>

```java
public void resetBackupStart()
```

##### `resetDaysOfTheMonth` <a name="resetDaysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth"></a>

```java
public void resetDaysOfTheMonth()
```

##### `resetDaysOfTheWeek` <a name="resetDaysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek"></a>

```java
public void resetDaysOfTheWeek()
```

##### `resetKind` <a name="resetKind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind"></a>

```java
public void resetKind()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput">backupStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput">daysOfTheMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput">daysOfTheWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart">backupStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">daysOfTheMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">daysOfTheWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupStartInput`<sup>Optional</sup> <a name="backupStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput"></a>

```java
public java.lang.String getBackupStartInput();
```

- *Type:* java.lang.String

---

##### `daysOfTheMonthInput`<sup>Optional</sup> <a name="daysOfTheMonthInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput"></a>

```java
public java.util.List<java.lang.Number> getDaysOfTheMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfTheWeekInput`<sup>Optional</sup> <a name="daysOfTheWeekInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfTheWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `backupStart`<sup>Required</sup> <a name="backupStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```java
public java.lang.String getBackupStart();
```

- *Type:* java.lang.String

---

##### `daysOfTheMonth`<sup>Required</sup> <a name="daysOfTheMonth" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfTheMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfTheWeek`<sup>Required</sup> <a name="daysOfTheWeek" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfTheWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemManagementPolicyBackupPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---


### PsqlDbSystemManagementPolicyOutputReference <a name="PsqlDbSystemManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemManagementPolicyOutputReference;

new PsqlDbSystemManagementPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy">putBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy">resetBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart">resetMaintenanceWindowStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupPolicy` <a name="putBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy"></a>

```java
public void putBackupPolicy(PsqlDbSystemManagementPolicyBackupPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `resetBackupPolicy` <a name="resetBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy"></a>

```java
public void resetBackupPolicy()
```

##### `resetMaintenanceWindowStart` <a name="resetMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart"></a>

```java
public void resetMaintenanceWindowStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput">backupPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput">maintenanceWindowStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart">maintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy"></a>

```java
public PsqlDbSystemManagementPolicyBackupPolicyOutputReference getBackupPolicy();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a>

---

##### `backupPolicyInput`<sup>Optional</sup> <a name="backupPolicyInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput"></a>

```java
public PsqlDbSystemManagementPolicyBackupPolicy getBackupPolicyInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `maintenanceWindowStartInput`<sup>Optional</sup> <a name="maintenanceWindowStartInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput"></a>

```java
public java.lang.String getMaintenanceWindowStartInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowStart`<sup>Required</sup> <a name="maintenanceWindowStart" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```java
public java.lang.String getMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemManagementPolicy getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---


### PsqlDbSystemNetworkDetailsOutputReference <a name="PsqlDbSystemNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemNetworkDetailsOutputReference;

new PsqlDbSystemNetworkDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp">resetPrimaryDbEndpointPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetPrimaryDbEndpointPrivateIp` <a name="resetPrimaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp"></a>

```java
public void resetPrimaryDbEndpointPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput">primaryDbEndpointPrivateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">primaryDbEndpointPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryDbEndpointPrivateIpInput`<sup>Optional</sup> <a name="primaryDbEndpointPrivateIpInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput"></a>

```java
public java.lang.String getPrimaryDbEndpointPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primaryDbEndpointPrivateIp`<sup>Required</sup> <a name="primaryDbEndpointPrivateIp" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```java
public java.lang.String getPrimaryDbEndpointPrivateIp();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemNetworkDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---


### PsqlDbSystemPatchOperationsList <a name="PsqlDbSystemPatchOperationsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemPatchOperationsList;

new PsqlDbSystemPatchOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get"></a>

```java
public PsqlDbSystemPatchOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>>

---


### PsqlDbSystemPatchOperationsOutputReference <a name="PsqlDbSystemPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemPatchOperationsOutputReference;

new PsqlDbSystemPatchOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem">resetSelectedItem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom"></a>

```java
public void resetFrom()
```

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetSelectedItem` <a name="resetSelectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem"></a>

```java
public void resetSelectedItem()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput">selectedItemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput">selectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position">position</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection">selection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value">value</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput"></a>

```java
public java.lang.String getPositionInput();
```

- *Type:* java.lang.String

---

##### `selectedItemInput`<sup>Optional</sup> <a name="selectedItemInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput"></a>

```java
public java.lang.String getSelectedItemInput();
```

- *Type:* java.lang.String

---

##### `selectionInput`<sup>Optional</sup> <a name="selectionInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput"></a>

```java
public java.lang.String getSelectionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position"></a>

```java
public java.lang.String getPosition();
```

- *Type:* java.lang.String

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem"></a>

```java
public java.lang.String getSelectedItem();
```

- *Type:* java.lang.String

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValue();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>

---


### PsqlDbSystemSourceOutputReference <a name="PsqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemSourceOutputReference;

new PsqlDbSystemSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides">resetIsHavingRestoreConfigOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId"></a>

```java
public void resetBackupId()
```

##### `resetIsHavingRestoreConfigOverrides` <a name="resetIsHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides"></a>

```java
public void resetIsHavingRestoreConfigOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput">isHavingRestoreConfigOverridesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId">backupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides">isHavingRestoreConfigOverrides</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```java
public java.lang.String getBackupIdInput();
```

- *Type:* java.lang.String

---

##### `isHavingRestoreConfigOverridesInput`<sup>Optional</sup> <a name="isHavingRestoreConfigOverridesInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput"></a>

```java
public java.lang.Object getIsHavingRestoreConfigOverridesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId"></a>

```java
public java.lang.String getBackupId();
```

- *Type:* java.lang.String

---

##### `isHavingRestoreConfigOverrides`<sup>Required</sup> <a name="isHavingRestoreConfigOverrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```java
public java.lang.Object getIsHavingRestoreConfigOverrides();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---


### PsqlDbSystemStorageDetailsOutputReference <a name="PsqlDbSystemStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemStorageDetailsOutputReference;

new PsqlDbSystemStorageDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops">resetIops</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetIops` <a name="resetIops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops"></a>

```java
public void resetIops()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput">isRegionallyDurableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput">systemTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops">iops</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable">isRegionallyDurable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType">systemType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput"></a>

```java
public java.lang.String getIopsInput();
```

- *Type:* java.lang.String

---

##### `isRegionallyDurableInput`<sup>Optional</sup> <a name="isRegionallyDurableInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput"></a>

```java
public java.lang.Object getIsRegionallyDurableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `systemTypeInput`<sup>Optional</sup> <a name="systemTypeInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput"></a>

```java
public java.lang.String getSystemTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops"></a>

```java
public java.lang.String getIops();
```

- *Type:* java.lang.String

---

##### `isRegionallyDurable`<sup>Required</sup> <a name="isRegionallyDurable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```java
public java.lang.Object getIsRegionallyDurable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `systemType`<sup>Required</sup> <a name="systemType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType"></a>

```java
public java.lang.String getSystemType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue"></a>

```java
public PsqlDbSystemStorageDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---


### PsqlDbSystemTimeoutsOutputReference <a name="PsqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.psql_db_system.PsqlDbSystemTimeoutsOutputReference;

new PsqlDbSystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

---




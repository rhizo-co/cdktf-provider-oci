# `psqlDbSystem` Submodule <a name="`psqlDbSystem` Submodule" id="rhizo-co-terraform-provider-oci.psqlDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PsqlDbSystem <a name="PsqlDbSystem" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system oci_psql_db_system}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_version: str,
  display_name: str,
  network_details: PsqlDbSystemNetworkDetails,
  shape: str,
  storage_details: PsqlDbSystemStorageDetails,
  apply_config: str = None,
  config_id: str = None,
  credentials: PsqlDbSystemCredentials = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_memory_size_in_gbs: typing.Union[int, float] = None,
  instance_ocpu_count: typing.Union[int, float] = None,
  instances_details: typing.Union[IResolvable, typing.List[PsqlDbSystemInstancesDetails]] = None,
  management_policy: PsqlDbSystemManagementPolicy = None,
  patch_operations: typing.Union[IResolvable, typing.List[PsqlDbSystemPatchOperations]] = None,
  source: PsqlDbSystemSource = None,
  system_type: str = None,
  timeouts: PsqlDbSystemTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.networkDetails">network_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.storageDetails">storage_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | storage_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.applyConfig">apply_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.configId">config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceMemorySizeInGbs">instance_memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceOcpuCount">instance_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instancesDetails">instances_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]</code> | instances_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.managementPolicy">management_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | management_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.patchOperations">patch_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.systemType">system_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}.

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `network_details`<sup>Required</sup> <a name="network_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.networkDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}.

---

##### `storage_details`<sup>Required</sup> <a name="storage_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.storageDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}

---

##### `apply_config`<sup>Optional</sup> <a name="apply_config" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.applyConfig"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}.

---

##### `config_id`<sup>Optional</sup> <a name="config_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.configId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.credentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}.

---

##### `instance_memory_size_in_gbs`<sup>Optional</sup> <a name="instance_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceMemorySizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}.

---

##### `instance_ocpu_count`<sup>Optional</sup> <a name="instance_ocpu_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instanceOcpuCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}.

---

##### `instances_details`<sup>Optional</sup> <a name="instances_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.instancesDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]

instances_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}

---

##### `management_policy`<sup>Optional</sup> <a name="management_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.managementPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

management_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}

---

##### `patch_operations`<sup>Optional</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.patchOperations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.source"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source PsqlDbSystem#source}

---

##### `system_type`<sup>Optional</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.Initializer.parameter.systemType"></a>

- *Type:* str

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
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails">put_instances_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy">put_management_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails">put_network_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations">put_patch_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource">put_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails">put_storage_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig">reset_apply_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId">reset_config_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs">reset_instance_memory_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount">reset_instance_ocpu_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails">reset_instances_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy">reset_management_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations">reset_patch_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType">reset_system_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credentials` <a name="put_credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials"></a>

```python
def put_credentials(
  password_details: PsqlDbSystemCredentialsPasswordDetails,
  username: str
) -> None
```

###### `password_details`<sup>Required</sup> <a name="password_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials.parameter.passwordDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

password_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_details PsqlDbSystem#password_details}

---

###### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putCredentials.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}.

---

##### `put_instances_details` <a name="put_instances_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails"></a>

```python
def put_instances_details(
  value: typing.Union[IResolvable, typing.List[PsqlDbSystemInstancesDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putInstancesDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]

---

##### `put_management_policy` <a name="put_management_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy"></a>

```python
def put_management_policy(
  backup_policy: PsqlDbSystemManagementPolicyBackupPolicy = None,
  maintenance_window_start: str = None
) -> None
```

###### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy.parameter.backupPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_policy PsqlDbSystem#backup_policy}

---

###### `maintenance_window_start`<sup>Optional</sup> <a name="maintenance_window_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putManagementPolicy.parameter.maintenanceWindowStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}.

---

##### `put_network_details` <a name="put_network_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails"></a>

```python
def put_network_details(
  subnet_id: str,
  nsg_ids: typing.List[str] = None,
  primary_db_endpoint_private_ip: str = None
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}.

---

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}.

---

###### `primary_db_endpoint_private_ip`<sup>Optional</sup> <a name="primary_db_endpoint_private_ip" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putNetworkDetails.parameter.primaryDbEndpointPrivateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}.

---

##### `put_patch_operations` <a name="put_patch_operations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations"></a>

```python
def put_patch_operations(
  value: typing.Union[IResolvable, typing.List[PsqlDbSystemPatchOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putPatchOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]

---

##### `put_source` <a name="put_source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource"></a>

```python
def put_source(
  source_type: str,
  backup_id: str = None,
  is_having_restore_config_overrides: typing.Union[bool, IResolvable] = None
) -> None
```

###### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}.

---

###### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}.

---

###### `is_having_restore_config_overrides`<sup>Optional</sup> <a name="is_having_restore_config_overrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putSource.parameter.isHavingRestoreConfigOverrides"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}.

---

##### `put_storage_details` <a name="put_storage_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails"></a>

```python
def put_storage_details(
  is_regionally_durable: typing.Union[bool, IResolvable],
  system_type: str,
  availability_domain: str = None,
  iops: str = None
) -> None
```

###### `is_regionally_durable`<sup>Required</sup> <a name="is_regionally_durable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.isRegionallyDurable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}.

---

###### `system_type`<sup>Required</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.systemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

###### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putStorageDetails.parameter.iops"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}.

---

##### `reset_apply_config` <a name="reset_apply_config" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetApplyConfig"></a>

```python
def reset_apply_config() -> None
```

##### `reset_config_id` <a name="reset_config_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetConfigId"></a>

```python
def reset_config_id() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_instance_memory_size_in_gbs` <a name="reset_instance_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceMemorySizeInGbs"></a>

```python
def reset_instance_memory_size_in_gbs() -> None
```

##### `reset_instance_ocpu_count` <a name="reset_instance_ocpu_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstanceOcpuCount"></a>

```python
def reset_instance_ocpu_count() -> None
```

##### `reset_instances_details` <a name="reset_instances_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetInstancesDetails"></a>

```python
def reset_instances_details() -> None
```

##### `reset_management_policy` <a name="reset_management_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetManagementPolicy"></a>

```python
def reset_management_policy() -> None
```

##### `reset_patch_operations` <a name="reset_patch_operations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetPatchOperations"></a>

```python
def reset_patch_operations() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_system_type` <a name="reset_system_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetSystemType"></a>

```python
def reset_system_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystem.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystem.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PsqlDbSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PsqlDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PsqlDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances">instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails">instances_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy">management_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails">network_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations">patch_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails">storage_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput">apply_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput">credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput">instance_memory_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput">instance_ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput">instances_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput">management_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput">network_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput">patch_operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput">source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput">storage_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput">system_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig">apply_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs">instance_memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount">instance_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType">system_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentials"></a>

```python
credentials: PsqlDbSystemCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference">PsqlDbSystemCredentialsOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instances"></a>

```python
instances: PsqlDbSystemInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList">PsqlDbSystemInstancesList</a>

---

##### `instances_details`<sup>Required</sup> <a name="instances_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetails"></a>

```python
instances_details: PsqlDbSystemInstancesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList">PsqlDbSystemInstancesDetailsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_policy`<sup>Required</sup> <a name="management_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicy"></a>

```python
management_policy: PsqlDbSystemManagementPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference">PsqlDbSystemManagementPolicyOutputReference</a>

---

##### `network_details`<sup>Required</sup> <a name="network_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetails"></a>

```python
network_details: PsqlDbSystemNetworkDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference">PsqlDbSystemNetworkDetailsOutputReference</a>

---

##### `patch_operations`<sup>Required</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperations"></a>

```python
patch_operations: PsqlDbSystemPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList">PsqlDbSystemPatchOperationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.source"></a>

```python
source: PsqlDbSystemSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference">PsqlDbSystemSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_details`<sup>Required</sup> <a name="storage_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetails"></a>

```python
storage_details: PsqlDbSystemStorageDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference">PsqlDbSystemStorageDetailsOutputReference</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeouts"></a>

```python
timeouts: PsqlDbSystemTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference">PsqlDbSystemTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `apply_config_input`<sup>Optional</sup> <a name="apply_config_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfigInput"></a>

```python
apply_config_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.credentialsInput"></a>

```python
credentials_input: PsqlDbSystemCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_memory_size_in_gbs_input`<sup>Optional</sup> <a name="instance_memory_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbsInput"></a>

```python
instance_memory_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_ocpu_count_input`<sup>Optional</sup> <a name="instance_ocpu_count_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCountInput"></a>

```python
instance_ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances_details_input`<sup>Optional</sup> <a name="instances_details_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instancesDetailsInput"></a>

```python
instances_details_input: typing.Union[IResolvable, typing.List[PsqlDbSystemInstancesDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]

---

##### `management_policy_input`<sup>Optional</sup> <a name="management_policy_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.managementPolicyInput"></a>

```python
management_policy_input: PsqlDbSystemManagementPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---

##### `network_details_input`<sup>Optional</sup> <a name="network_details_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.networkDetailsInput"></a>

```python
network_details_input: PsqlDbSystemNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---

##### `patch_operations_input`<sup>Optional</sup> <a name="patch_operations_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.patchOperationsInput"></a>

```python
patch_operations_input: typing.Union[IResolvable, typing.List[PsqlDbSystemPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.sourceInput"></a>

```python
source_input: PsqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---

##### `storage_details_input`<sup>Optional</sup> <a name="storage_details_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.storageDetailsInput"></a>

```python
storage_details_input: PsqlDbSystemStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---

##### `system_type_input`<sup>Optional</sup> <a name="system_type_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemTypeInput"></a>

```python
system_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PsqlDbSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>]

---

##### `apply_config`<sup>Required</sup> <a name="apply_config" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.applyConfig"></a>

```python
apply_config: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_memory_size_in_gbs`<sup>Required</sup> <a name="instance_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceMemorySizeInGbs"></a>

```python
instance_memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_ocpu_count`<sup>Required</sup> <a name="instance_ocpu_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.instanceOcpuCount"></a>

```python
instance_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PsqlDbSystemConfig <a name="PsqlDbSystemConfig" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_version: str,
  display_name: str,
  network_details: PsqlDbSystemNetworkDetails,
  shape: str,
  storage_details: PsqlDbSystemStorageDetails,
  apply_config: str = None,
  config_id: str = None,
  credentials: PsqlDbSystemCredentials = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_memory_size_in_gbs: typing.Union[int, float] = None,
  instance_ocpu_count: typing.Union[int, float] = None,
  instances_details: typing.Union[IResolvable, typing.List[PsqlDbSystemInstancesDetails]] = None,
  management_policy: PsqlDbSystemManagementPolicy = None,
  patch_operations: typing.Union[IResolvable, typing.List[PsqlDbSystemPatchOperations]] = None,
  source: PsqlDbSystemSource = None,
  system_type: str = None,
  timeouts: PsqlDbSystemTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails">network_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails">storage_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | storage_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig">apply_config</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId">config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs">instance_memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount">instance_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails">instances_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]</code> | instances_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy">management_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | management_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations">patch_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType">system_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}.

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `network_details`<sup>Required</sup> <a name="network_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.networkDetails"></a>

```python
network_details: PsqlDbSystemNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}.

---

##### `storage_details`<sup>Required</sup> <a name="storage_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.storageDetails"></a>

```python
storage_details: PsqlDbSystemStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}

---

##### `apply_config`<sup>Optional</sup> <a name="apply_config" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.applyConfig"></a>

```python
apply_config: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}.

---

##### `config_id`<sup>Optional</sup> <a name="config_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.credentials"></a>

```python
credentials: PsqlDbSystemCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#id PsqlDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}.

---

##### `instance_memory_size_in_gbs`<sup>Optional</sup> <a name="instance_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceMemorySizeInGbs"></a>

```python
instance_memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}.

---

##### `instance_ocpu_count`<sup>Optional</sup> <a name="instance_ocpu_count" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instanceOcpuCount"></a>

```python
instance_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}.

---

##### `instances_details`<sup>Optional</sup> <a name="instances_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.instancesDetails"></a>

```python
instances_details: typing.Union[IResolvable, typing.List[PsqlDbSystemInstancesDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]

instances_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}

---

##### `management_policy`<sup>Optional</sup> <a name="management_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.managementPolicy"></a>

```python
management_policy: PsqlDbSystemManagementPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

management_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}

---

##### `patch_operations`<sup>Optional</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.patchOperations"></a>

```python
patch_operations: typing.Union[IResolvable, typing.List[PsqlDbSystemPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.source"></a>

```python
source: PsqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source PsqlDbSystem#source}

---

##### `system_type`<sup>Optional</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemConfig.property.timeouts"></a>

```python
timeouts: PsqlDbSystemTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#timeouts PsqlDbSystem#timeouts}

---

### PsqlDbSystemCredentials <a name="PsqlDbSystemCredentials" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemCredentials(
  password_details: PsqlDbSystemCredentialsPasswordDetails,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails">password_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | password_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}. |

---

##### `password_details`<sup>Required</sup> <a name="password_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.passwordDetails"></a>

```python
password_details: PsqlDbSystemCredentialsPasswordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

password_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_details PsqlDbSystem#password_details}

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#username PsqlDbSystem#username}.

---

### PsqlDbSystemCredentialsPasswordDetails <a name="PsqlDbSystemCredentialsPasswordDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails(
  password_type: str,
  password: str = None,
  secret_id: str = None,
  secret_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType">password_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion">secret_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}. |

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}.

---

##### `secret_version`<sup>Optional</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}.

---

### PsqlDbSystemInstances <a name="PsqlDbSystemInstances" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemInstances()
```


### PsqlDbSystemInstancesDetails <a name="PsqlDbSystemInstancesDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemInstancesDetails(
  description: str = None,
  display_name: str = None,
  private_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#description PsqlDbSystem#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}.

---

### PsqlDbSystemManagementPolicy <a name="PsqlDbSystemManagementPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemManagementPolicy(
  backup_policy: PsqlDbSystemManagementPolicyBackupPolicy = None,
  maintenance_window_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | backup_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}. |

---

##### `backup_policy`<sup>Optional</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.backupPolicy"></a>

```python
backup_policy: PsqlDbSystemManagementPolicyBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_policy PsqlDbSystem#backup_policy}

---

##### `maintenance_window_start`<sup>Optional</sup> <a name="maintenance_window_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}.

---

### PsqlDbSystemManagementPolicyBackupPolicy <a name="PsqlDbSystemManagementPolicyBackupPolicy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy(
  backup_start: str = None,
  days_of_the_month: typing.List[typing.Union[int, float]] = None,
  days_of_the_week: typing.List[str] = None,
  kind: str = None,
  retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart">backup_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth">days_of_the_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek">days_of_the_week</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}. |

---

##### `backup_start`<sup>Optional</sup> <a name="backup_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.backupStart"></a>

```python
backup_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}.

---

##### `days_of_the_month`<sup>Optional</sup> <a name="days_of_the_month" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheMonth"></a>

```python
days_of_the_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}.

---

##### `days_of_the_week`<sup>Optional</sup> <a name="days_of_the_week" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.daysOfTheWeek"></a>

```python
days_of_the_week: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}.

---

### PsqlDbSystemNetworkDetails <a name="PsqlDbSystemNetworkDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemNetworkDetails(
  subnet_id: str,
  nsg_ids: typing.List[str] = None,
  primary_db_endpoint_private_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp">primary_db_endpoint_private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}.

---

##### `primary_db_endpoint_private_ip`<sup>Optional</sup> <a name="primary_db_endpoint_private_ip" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails.property.primaryDbEndpointPrivateIp"></a>

```python
primary_db_endpoint_private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}.

---

### PsqlDbSystemPatchOperations <a name="PsqlDbSystemPatchOperations" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemPatchOperations(
  operation: str,
  selection: str,
  from: str = None,
  position: str = None,
  selected_item: str = None,
  value: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection">selection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position">position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem">selected_item</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value">value</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}. |

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selection"></a>

```python
selection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}.

---

##### `from`<sup>Optional</sup> <a name="from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#from PsqlDbSystem#from}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.position"></a>

```python
position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#position PsqlDbSystem#position}.

---

##### `selected_item`<sup>Optional</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations.property.value"></a>

```python
value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#value PsqlDbSystem#value}.

---

### PsqlDbSystemSource <a name="PsqlDbSystemSource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemSource(
  source_type: str,
  backup_id: str = None,
  is_having_restore_config_overrides: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides">is_having_restore_config_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}. |

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}.

---

##### `is_having_restore_config_overrides`<sup>Optional</sup> <a name="is_having_restore_config_overrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource.property.isHavingRestoreConfigOverrides"></a>

```python
is_having_restore_config_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}.

---

### PsqlDbSystemStorageDetails <a name="PsqlDbSystemStorageDetails" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemStorageDetails(
  is_regionally_durable: typing.Union[bool, IResolvable],
  system_type: str,
  availability_domain: str = None,
  iops: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable">is_regionally_durable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType">system_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops">iops</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}. |

---

##### `is_regionally_durable`<sup>Required</sup> <a name="is_regionally_durable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.isRegionallyDurable"></a>

```python
is_regionally_durable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}.

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails.property.iops"></a>

```python
iops: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}.

---

### PsqlDbSystemTimeouts <a name="PsqlDbSystemTimeouts" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#create PsqlDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#update PsqlDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PsqlDbSystemCredentialsOutputReference <a name="PsqlDbSystemCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails">put_password_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_password_details` <a name="put_password_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails"></a>

```python
def put_password_details(
  password_type: str,
  password: str = None,
  secret_id: str = None,
  secret_version: str = None
) -> None
```

###### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.passwordType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}.

---

###### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#password PsqlDbSystem#password}.

---

###### `secret_id`<sup>Optional</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}.

---

###### `secret_version`<sup>Optional</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.putPasswordDetails.parameter.secretVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails">password_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput">password_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_details`<sup>Required</sup> <a name="password_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetails"></a>

```python
password_details: PsqlDbSystemCredentialsPasswordDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference">PsqlDbSystemCredentialsPasswordDetailsOutputReference</a>

---

##### `password_details_input`<sup>Optional</sup> <a name="password_details_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.passwordDetailsInput"></a>

```python
password_details_input: PsqlDbSystemCredentialsPasswordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentials">PsqlDbSystemCredentials</a>

---


### PsqlDbSystemCredentialsPasswordDetailsOutputReference <a name="PsqlDbSystemCredentialsPasswordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion">reset_secret_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_secret_version` <a name="reset_secret_version" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.resetSecretVersion"></a>

```python
def reset_secret_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput">password_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType">password_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_type_input`<sup>Optional</sup> <a name="password_type_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordTypeInput"></a>

```python
password_type_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_type`<sup>Required</sup> <a name="password_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.passwordType"></a>

```python
password_type: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetailsOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemCredentialsPasswordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemCredentialsPasswordDetails">PsqlDbSystemCredentialsPasswordDetails</a>

---


### PsqlDbSystemInstancesDetailsList <a name="PsqlDbSystemInstancesDetailsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemInstancesDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PsqlDbSystemInstancesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PsqlDbSystemInstancesDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]]

---


### PsqlDbSystemInstancesDetailsOutputReference <a name="PsqlDbSystemInstancesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp">reset_private_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PsqlDbSystemInstancesDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesDetails">PsqlDbSystemInstancesDetails</a>]

---


### PsqlDbSystemInstancesList <a name="PsqlDbSystemInstancesList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PsqlDbSystemInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PsqlDbSystemInstancesOutputReference <a name="PsqlDbSystemInstancesOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstancesOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemInstances">PsqlDbSystemInstances</a>

---


### PsqlDbSystemManagementPolicyBackupPolicyOutputReference <a name="PsqlDbSystemManagementPolicyBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart">reset_backup_start</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth">reset_days_of_the_month</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek">reset_days_of_the_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays">reset_retention_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_start` <a name="reset_backup_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetBackupStart"></a>

```python
def reset_backup_start() -> None
```

##### `reset_days_of_the_month` <a name="reset_days_of_the_month" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheMonth"></a>

```python
def reset_days_of_the_month() -> None
```

##### `reset_days_of_the_week` <a name="reset_days_of_the_week" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetDaysOfTheWeek"></a>

```python
def reset_days_of_the_week() -> None
```

##### `reset_kind` <a name="reset_kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput">backup_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput">days_of_the_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput">days_of_the_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart">backup_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth">days_of_the_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek">days_of_the_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_start_input`<sup>Optional</sup> <a name="backup_start_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStartInput"></a>

```python
backup_start_input: str
```

- *Type:* str

---

##### `days_of_the_month_input`<sup>Optional</sup> <a name="days_of_the_month_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonthInput"></a>

```python
days_of_the_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_the_week_input`<sup>Optional</sup> <a name="days_of_the_week_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeekInput"></a>

```python
days_of_the_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_start`<sup>Required</sup> <a name="backup_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.backupStart"></a>

```python
backup_start: str
```

- *Type:* str

---

##### `days_of_the_month`<sup>Required</sup> <a name="days_of_the_month" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheMonth"></a>

```python
days_of_the_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `days_of_the_week`<sup>Required</sup> <a name="days_of_the_week" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.daysOfTheWeek"></a>

```python
days_of_the_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemManagementPolicyBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---


### PsqlDbSystemManagementPolicyOutputReference <a name="PsqlDbSystemManagementPolicyOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy">put_backup_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy">reset_backup_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart">reset_maintenance_window_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_policy` <a name="put_backup_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy"></a>

```python
def put_backup_policy(
  backup_start: str = None,
  days_of_the_month: typing.List[typing.Union[int, float]] = None,
  days_of_the_week: typing.List[str] = None,
  kind: str = None,
  retention_days: typing.Union[int, float] = None
) -> None
```

###### `backup_start`<sup>Optional</sup> <a name="backup_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.backupStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}.

---

###### `days_of_the_month`<sup>Optional</sup> <a name="days_of_the_month" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.daysOfTheMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}.

---

###### `days_of_the_week`<sup>Optional</sup> <a name="days_of_the_week" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.daysOfTheWeek"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}.

---

###### `kind`<sup>Optional</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}.

---

###### `retention_days`<sup>Optional</sup> <a name="retention_days" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.putBackupPolicy.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}.

---

##### `reset_backup_policy` <a name="reset_backup_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetBackupPolicy"></a>

```python
def reset_backup_policy() -> None
```

##### `reset_maintenance_window_start` <a name="reset_maintenance_window_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.resetMaintenanceWindowStart"></a>

```python
def reset_maintenance_window_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput">backup_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput">maintenance_window_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart">maintenance_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicy"></a>

```python
backup_policy: PsqlDbSystemManagementPolicyBackupPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicyOutputReference">PsqlDbSystemManagementPolicyBackupPolicyOutputReference</a>

---

##### `backup_policy_input`<sup>Optional</sup> <a name="backup_policy_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.backupPolicyInput"></a>

```python
backup_policy_input: PsqlDbSystemManagementPolicyBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyBackupPolicy">PsqlDbSystemManagementPolicyBackupPolicy</a>

---

##### `maintenance_window_start_input`<sup>Optional</sup> <a name="maintenance_window_start_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStartInput"></a>

```python
maintenance_window_start_input: str
```

- *Type:* str

---

##### `maintenance_window_start`<sup>Required</sup> <a name="maintenance_window_start" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.maintenanceWindowStart"></a>

```python
maintenance_window_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicyOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemManagementPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemManagementPolicy">PsqlDbSystemManagementPolicy</a>

---


### PsqlDbSystemNetworkDetailsOutputReference <a name="PsqlDbSystemNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp">reset_primary_db_endpoint_private_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_primary_db_endpoint_private_ip` <a name="reset_primary_db_endpoint_private_ip" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.resetPrimaryDbEndpointPrivateIp"></a>

```python
def reset_primary_db_endpoint_private_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput">primary_db_endpoint_private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp">primary_db_endpoint_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_db_endpoint_private_ip_input`<sup>Optional</sup> <a name="primary_db_endpoint_private_ip_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIpInput"></a>

```python
primary_db_endpoint_private_ip_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_db_endpoint_private_ip`<sup>Required</sup> <a name="primary_db_endpoint_private_ip" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.primaryDbEndpointPrivateIp"></a>

```python
primary_db_endpoint_private_ip: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetailsOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemNetworkDetails">PsqlDbSystemNetworkDetails</a>

---


### PsqlDbSystemPatchOperationsList <a name="PsqlDbSystemPatchOperationsList" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemPatchOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PsqlDbSystemPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PsqlDbSystemPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]]

---


### PsqlDbSystemPatchOperationsOutputReference <a name="PsqlDbSystemPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem">reset_selected_item</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_position` <a name="reset_position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_selected_item` <a name="reset_selected_item" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetSelectedItem"></a>

```python
def reset_selected_item() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput">position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput">selected_item_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput">selection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem">selected_item</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection">selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value">value</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.positionInput"></a>

```python
position_input: str
```

- *Type:* str

---

##### `selected_item_input`<sup>Optional</sup> <a name="selected_item_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItemInput"></a>

```python
selected_item_input: str
```

- *Type:* str

---

##### `selection_input`<sup>Optional</sup> <a name="selection_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectionInput"></a>

```python
selection_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.valueInput"></a>

```python
value_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `selected_item`<sup>Required</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.selection"></a>

```python
selection: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.value"></a>

```python
value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PsqlDbSystemPatchOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemPatchOperations">PsqlDbSystemPatchOperations</a>]

---


### PsqlDbSystemSourceOutputReference <a name="PsqlDbSystemSourceOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides">reset_is_having_restore_config_overrides</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_id` <a name="reset_backup_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_is_having_restore_config_overrides` <a name="reset_is_having_restore_config_overrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.resetIsHavingRestoreConfigOverrides"></a>

```python
def reset_is_having_restore_config_overrides() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput">is_having_restore_config_overrides_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides">is_having_restore_config_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `is_having_restore_config_overrides_input`<sup>Optional</sup> <a name="is_having_restore_config_overrides_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverridesInput"></a>

```python
is_having_restore_config_overrides_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `is_having_restore_config_overrides`<sup>Required</sup> <a name="is_having_restore_config_overrides" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.isHavingRestoreConfigOverrides"></a>

```python
is_having_restore_config_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSourceOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemSource">PsqlDbSystemSource</a>

---


### PsqlDbSystemStorageDetailsOutputReference <a name="PsqlDbSystemStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops">reset_iops</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_iops` <a name="reset_iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput">iops_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput">is_regionally_durable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput">system_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops">iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable">is_regionally_durable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType">system_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iopsInput"></a>

```python
iops_input: str
```

- *Type:* str

---

##### `is_regionally_durable_input`<sup>Optional</sup> <a name="is_regionally_durable_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurableInput"></a>

```python
is_regionally_durable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `system_type_input`<sup>Optional</sup> <a name="system_type_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemTypeInput"></a>

```python
system_type_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.iops"></a>

```python
iops: str
```

- *Type:* str

---

##### `is_regionally_durable`<sup>Required</sup> <a name="is_regionally_durable" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.isRegionallyDurable"></a>

```python
is_regionally_durable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `system_type`<sup>Required</sup> <a name="system_type" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.systemType"></a>

```python
system_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetailsOutputReference.property.internalValue"></a>

```python
internal_value: PsqlDbSystemStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemStorageDetails">PsqlDbSystemStorageDetails</a>

---


### PsqlDbSystemTimeoutsOutputReference <a name="PsqlDbSystemTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import psql_db_system

psqlDbSystem.PsqlDbSystemTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PsqlDbSystemTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.psqlDbSystem.PsqlDbSystemTimeouts">PsqlDbSystemTimeouts</a>]

---




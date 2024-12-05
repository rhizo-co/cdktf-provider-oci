# `blockchainBlockchainPlatform` Submodule <a name="`blockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockchainBlockchainPlatform <a name="BlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatform(
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
  compute_shape: str,
  display_name: str,
  idcs_access_token: str,
  platform_role: str,
  ca_cert_archive_text: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  federated_user_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_byol: typing.Union[bool, IResolvable] = None,
  load_balancer_shape: str = None,
  platform_version: str = None,
  replicas: BlockchainBlockchainPlatformReplicas = None,
  storage_size_in_tbs: typing.Union[int, float] = None,
  timeouts: BlockchainBlockchainPlatformTimeouts = None,
  total_ocpu_capacity: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.computeShape">compute_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformRole">platform_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.caCertArchiveText">ca_cert_archive_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.federatedUserId">federated_user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.isByol">is_byol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.loadBalancerShape">load_balancer_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.storageSizeInTbs">storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.totalOcpuCapacity">total_ocpu_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}.

---

##### `compute_shape`<sup>Required</sup> <a name="compute_shape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.computeShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}.

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.idcsAccessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}.

---

##### `platform_role`<sup>Required</sup> <a name="platform_role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}.

---

##### `ca_cert_archive_text`<sup>Optional</sup> <a name="ca_cert_archive_text" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.caCertArchiveText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}.

---

##### `federated_user_id`<sup>Optional</sup> <a name="federated_user_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.federatedUserId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_byol`<sup>Optional</sup> <a name="is_byol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.isByol"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}.

---

##### `load_balancer_shape`<sup>Optional</sup> <a name="load_balancer_shape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.loadBalancerShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}.

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.platformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.replicas"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}

---

##### `storage_size_in_tbs`<sup>Optional</sup> <a name="storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.storageSizeInTbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}

---

##### `total_ocpu_capacity`<sup>Optional</sup> <a name="total_ocpu_capacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.Initializer.parameter.totalOcpuCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas">put_replicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText">reset_ca_cert_archive_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId">reset_federated_user_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol">reset_is_byol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape">reset_load_balancer_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion">reset_platform_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas">reset_replicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs">reset_storage_size_in_tbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity">reset_total_ocpu_capacity</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_replicas` <a name="put_replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas"></a>

```python
def put_replicas(
  ca_count: typing.Union[int, float] = None,
  console_count: typing.Union[int, float] = None,
  proxy_count: typing.Union[int, float] = None
) -> None
```

###### `ca_count`<sup>Optional</sup> <a name="ca_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas.parameter.caCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}.

---

###### `console_count`<sup>Optional</sup> <a name="console_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas.parameter.consoleCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}.

---

###### `proxy_count`<sup>Optional</sup> <a name="proxy_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putReplicas.parameter.proxyCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}.

---

##### `reset_ca_cert_archive_text` <a name="reset_ca_cert_archive_text" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetCaCertArchiveText"></a>

```python
def reset_ca_cert_archive_text() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_federated_user_id` <a name="reset_federated_user_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFederatedUserId"></a>

```python
def reset_federated_user_id() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_byol` <a name="reset_is_byol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetIsByol"></a>

```python
def reset_is_byol() -> None
```

##### `reset_load_balancer_shape` <a name="reset_load_balancer_shape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetLoadBalancerShape"></a>

```python
def reset_load_balancer_shape() -> None
```

##### `reset_platform_version` <a name="reset_platform_version" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetPlatformVersion"></a>

```python
def reset_platform_version() -> None
```

##### `reset_replicas` <a name="reset_replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetReplicas"></a>

```python
def reset_replicas() -> None
```

##### `reset_storage_size_in_tbs` <a name="reset_storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetStorageSizeInTbs"></a>

```python
def reset_storage_size_in_tbs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_total_ocpu_capacity` <a name="reset_total_ocpu_capacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.resetTotalOcpuCapacity"></a>

```python
def reset_total_ocpu_capacity() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BlockchainBlockchainPlatform to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails">component_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">host_ocpu_utilization_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd">is_multi_ad</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType">platform_shape_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint">service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion">service_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs">storage_used_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput">ca_cert_archive_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput">compute_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput">federated_user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput">idcs_access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput">is_byol_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput">load_balancer_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput">platform_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput">platform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput">replicas_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput">storage_size_in_tbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput">total_ocpu_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText">ca_cert_archive_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape">compute_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId">federated_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol">is_byol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape">load_balancer_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole">platform_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs">storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity">total_ocpu_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component_details`<sup>Required</sup> <a name="component_details" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.componentDetails"></a>

```python
component_details: BlockchainBlockchainPlatformComponentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList">BlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `host_ocpu_utilization_info`<sup>Required</sup> <a name="host_ocpu_utilization_info" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```python
host_ocpu_utilization_info: BlockchainBlockchainPlatformHostOcpuUtilizationInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList">BlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `is_multi_ad`<sup>Required</sup> <a name="is_multi_ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isMultiAd"></a>

```python
is_multi_ad: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `platform_shape_type`<sup>Required</sup> <a name="platform_shape_type" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformShapeType"></a>

```python
platform_shape_type: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicas"></a>

```python
replicas: BlockchainBlockchainPlatformReplicasOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference">BlockchainBlockchainPlatformReplicasOutputReference</a>

---

##### `service_endpoint`<sup>Required</sup> <a name="service_endpoint" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```python
service_endpoint: str
```

- *Type:* str

---

##### `service_version`<sup>Required</sup> <a name="service_version" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.serviceVersion"></a>

```python
service_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_used_in_tbs`<sup>Required</sup> <a name="storage_used_in_tbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```python
storage_used_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeouts"></a>

```python
timeouts: BlockchainBlockchainPlatformTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference">BlockchainBlockchainPlatformTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `ca_cert_archive_text_input`<sup>Optional</sup> <a name="ca_cert_archive_text_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveTextInput"></a>

```python
ca_cert_archive_text_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compute_shape_input`<sup>Optional</sup> <a name="compute_shape_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShapeInput"></a>

```python
compute_shape_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `federated_user_id_input`<sup>Optional</sup> <a name="federated_user_id_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserIdInput"></a>

```python
federated_user_id_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `idcs_access_token_input`<sup>Optional</sup> <a name="idcs_access_token_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessTokenInput"></a>

```python
idcs_access_token_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_byol_input`<sup>Optional</sup> <a name="is_byol_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByolInput"></a>

```python
is_byol_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancer_shape_input`<sup>Optional</sup> <a name="load_balancer_shape_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShapeInput"></a>

```python
load_balancer_shape_input: str
```

- *Type:* str

---

##### `platform_role_input`<sup>Optional</sup> <a name="platform_role_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRoleInput"></a>

```python
platform_role_input: str
```

- *Type:* str

---

##### `platform_version_input`<sup>Optional</sup> <a name="platform_version_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersionInput"></a>

```python
platform_version_input: str
```

- *Type:* str

---

##### `replicas_input`<sup>Optional</sup> <a name="replicas_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.replicasInput"></a>

```python
replicas_input: BlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---

##### `storage_size_in_tbs_input`<sup>Optional</sup> <a name="storage_size_in_tbs_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbsInput"></a>

```python
storage_size_in_tbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BlockchainBlockchainPlatformTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>]

---

##### `total_ocpu_capacity_input`<sup>Optional</sup> <a name="total_ocpu_capacity_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacityInput"></a>

```python
total_ocpu_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ca_cert_archive_text`<sup>Required</sup> <a name="ca_cert_archive_text" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```python
ca_cert_archive_text: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_shape`<sup>Required</sup> <a name="compute_shape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.computeShape"></a>

```python
compute_shape: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `federated_user_id`<sup>Required</sup> <a name="federated_user_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.federatedUserId"></a>

```python
federated_user_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

---

##### `is_byol`<sup>Required</sup> <a name="is_byol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.isByol"></a>

```python
is_byol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancer_shape`<sup>Required</sup> <a name="load_balancer_shape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```python
load_balancer_shape: str
```

- *Type:* str

---

##### `platform_role`<sup>Required</sup> <a name="platform_role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformRole"></a>

```python
platform_role: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `storage_size_in_tbs`<sup>Required</sup> <a name="storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```python
storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_ocpu_capacity`<sup>Required</sup> <a name="total_ocpu_capacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```python
total_ocpu_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatform.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BlockchainBlockchainPlatformComponentDetails <a name="BlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails()
```


### BlockchainBlockchainPlatformComponentDetailsOsns <a name="BlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns()
```


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam()
```


### BlockchainBlockchainPlatformComponentDetailsPeers <a name="BlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers()
```


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam()
```


### BlockchainBlockchainPlatformConfig <a name="BlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compute_shape: str,
  display_name: str,
  idcs_access_token: str,
  platform_role: str,
  ca_cert_archive_text: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  federated_user_id: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_byol: typing.Union[bool, IResolvable] = None,
  load_balancer_shape: str = None,
  platform_version: str = None,
  replicas: BlockchainBlockchainPlatformReplicas = None,
  storage_size_in_tbs: typing.Union[int, float] = None,
  timeouts: BlockchainBlockchainPlatformTimeouts = None,
  total_ocpu_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape">compute_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole">platform_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText">ca_cert_archive_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId">federated_user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol">is_byol</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape">load_balancer_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion">platform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs">storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity">total_ocpu_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compartment_id BlockchainBlockchainPlatform#compartment_id}.

---

##### `compute_shape`<sup>Required</sup> <a name="compute_shape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.computeShape"></a>

```python
compute_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#compute_shape BlockchainBlockchainPlatform#compute_shape}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#display_name BlockchainBlockchainPlatform#display_name}.

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#idcs_access_token BlockchainBlockchainPlatform#idcs_access_token}.

---

##### `platform_role`<sup>Required</sup> <a name="platform_role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformRole"></a>

```python
platform_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_role BlockchainBlockchainPlatform#platform_role}.

---

##### `ca_cert_archive_text`<sup>Optional</sup> <a name="ca_cert_archive_text" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.caCertArchiveText"></a>

```python
ca_cert_archive_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_cert_archive_text BlockchainBlockchainPlatform#ca_cert_archive_text}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#defined_tags BlockchainBlockchainPlatform#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#description BlockchainBlockchainPlatform#description}.

---

##### `federated_user_id`<sup>Optional</sup> <a name="federated_user_id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.federatedUserId"></a>

```python
federated_user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#federated_user_id BlockchainBlockchainPlatform#federated_user_id}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#freeform_tags BlockchainBlockchainPlatform#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#id BlockchainBlockchainPlatform#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_byol`<sup>Optional</sup> <a name="is_byol" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.isByol"></a>

```python
is_byol: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#is_byol BlockchainBlockchainPlatform#is_byol}.

---

##### `load_balancer_shape`<sup>Optional</sup> <a name="load_balancer_shape" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.loadBalancerShape"></a>

```python
load_balancer_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#load_balancer_shape BlockchainBlockchainPlatform#load_balancer_shape}.

---

##### `platform_version`<sup>Optional</sup> <a name="platform_version" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#platform_version BlockchainBlockchainPlatform#platform_version}.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.replicas"></a>

```python
replicas: BlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#replicas BlockchainBlockchainPlatform#replicas}

---

##### `storage_size_in_tbs`<sup>Optional</sup> <a name="storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.storageSizeInTbs"></a>

```python
storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#storage_size_in_tbs BlockchainBlockchainPlatform#storage_size_in_tbs}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.timeouts"></a>

```python
timeouts: BlockchainBlockchainPlatformTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#timeouts BlockchainBlockchainPlatform#timeouts}

---

##### `total_ocpu_capacity`<sup>Optional</sup> <a name="total_ocpu_capacity" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformConfig.property.totalOcpuCapacity"></a>

```python
total_ocpu_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#total_ocpu_capacity BlockchainBlockchainPlatform#total_ocpu_capacity}.

---

### BlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo()
```


### BlockchainBlockchainPlatformReplicas <a name="BlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas(
  ca_count: typing.Union[int, float] = None,
  console_count: typing.Union[int, float] = None,
  proxy_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount">ca_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount">console_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount">proxy_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}. |

---

##### `ca_count`<sup>Optional</sup> <a name="ca_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.caCount"></a>

```python
ca_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#ca_count BlockchainBlockchainPlatform#ca_count}.

---

##### `console_count`<sup>Optional</sup> <a name="console_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.consoleCount"></a>

```python
console_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#console_count BlockchainBlockchainPlatform#console_count}.

---

##### `proxy_count`<sup>Optional</sup> <a name="proxy_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas.property.proxyCount"></a>

```python
proxy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#proxy_count BlockchainBlockchainPlatform#proxy_count}.

---

### BlockchainBlockchainPlatformTimeouts <a name="BlockchainBlockchainPlatformTimeouts" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#create BlockchainBlockchainPlatform#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#delete BlockchainBlockchainPlatform#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/blockchain_blockchain_platform#update BlockchainBlockchainPlatform#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockchainBlockchainPlatformComponentDetailsList <a name="BlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainBlockchainPlatformComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainBlockchainPlatformComponentDetailsOsnsList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpu_allocation_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocpu_allocation_number`<sup>Required</sup> <a name="ocpu_allocation_number" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```python
ocpu_allocation_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">ocpu_allocation_param</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">osn_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `ocpu_allocation_param`<sup>Required</sup> <a name="ocpu_allocation_param" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```python
ocpu_allocation_param: BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `osn_key`<sup>Required</sup> <a name="osn_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```python
osn_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainBlockchainPlatformComponentDetailsOsns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsns">BlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### BlockchainBlockchainPlatformComponentDetailsOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `osns`<sup>Required</sup> <a name="osns" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```python
osns: BlockchainBlockchainPlatformComponentDetailsOsnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOsnsList">BlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```python
peers: BlockchainBlockchainPlatformComponentDetailsPeersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList">BlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainBlockchainPlatformComponentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetails">BlockchainBlockchainPlatformComponentDetails</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersList <a name="BlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainBlockchainPlatformComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpu_allocation_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocpu_allocation_number`<sup>Required</sup> <a name="ocpu_allocation_number" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```python
ocpu_allocation_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### BlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="BlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">ocpu_allocation_param</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">peer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ocpu_allocation_param`<sup>Required</sup> <a name="ocpu_allocation_param" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```python
ocpu_allocation_param: BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">BlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `peer_key`<sup>Required</sup> <a name="peer_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```python
peer_key: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainBlockchainPlatformComponentDetailsPeers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformComponentDetailsPeers">BlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">ocpu_capacity_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">ocpu_utilization_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ocpu_capacity_number`<sup>Required</sup> <a name="ocpu_capacity_number" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```python
ocpu_capacity_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_utilization_number`<sup>Required</sup> <a name="ocpu_utilization_number" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```python
ocpu_utilization_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainBlockchainPlatformHostOcpuUtilizationInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformHostOcpuUtilizationInfo">BlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### BlockchainBlockchainPlatformReplicasOutputReference <a name="BlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount">reset_ca_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount">reset_console_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount">reset_proxy_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_count` <a name="reset_ca_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetCaCount"></a>

```python
def reset_ca_count() -> None
```

##### `reset_console_count` <a name="reset_console_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetConsoleCount"></a>

```python
def reset_console_count() -> None
```

##### `reset_proxy_count` <a name="reset_proxy_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.resetProxyCount"></a>

```python
def reset_proxy_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput">ca_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput">console_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput">proxy_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount">ca_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">console_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">proxy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_count_input`<sup>Optional</sup> <a name="ca_count_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCountInput"></a>

```python
ca_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `console_count_input`<sup>Optional</sup> <a name="console_count_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCountInput"></a>

```python
console_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_count_input`<sup>Optional</sup> <a name="proxy_count_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCountInput"></a>

```python
proxy_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ca_count`<sup>Required</sup> <a name="ca_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```python
ca_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `console_count`<sup>Required</sup> <a name="console_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```python
console_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_count`<sup>Required</sup> <a name="proxy_count" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```python
proxy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```python
internal_value: BlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformReplicas">BlockchainBlockchainPlatformReplicas</a>

---


### BlockchainBlockchainPlatformTimeoutsOutputReference <a name="BlockchainBlockchainPlatformTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import blockchain_blockchain_platform

blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BlockchainBlockchainPlatformTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.blockchainBlockchainPlatform.BlockchainBlockchainPlatformTimeouts">BlockchainBlockchainPlatformTimeouts</a>]

---




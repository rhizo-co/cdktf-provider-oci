# `fileStorageMountTarget` Submodule <a name="`fileStorageMountTarget` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageMountTarget <a name="FileStorageMountTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target oci_file_storage_mount_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTarget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  id: str = None,
  idmap_type: str = None,
  ip_address: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  kerberos: FileStorageMountTargetKerberos = None,
  ldap_idmap: FileStorageMountTargetLdapIdmap = None,
  locks: typing.Union[IResolvable, typing.List[FileStorageMountTargetLocks]] = None,
  nsg_ids: typing.List[str] = None,
  requested_throughput: str = None,
  timeouts: FileStorageMountTargetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.idmapType">idmap_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | kerberos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ldapIdmap">ldap_idmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | ldap_idmap block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.requestedThroughput">requested_throughput</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.hostnameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idmap_type`<sup>Optional</sup> <a name="idmap_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.idmapType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}.

---

##### `kerberos`<sup>Optional</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.kerberos"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}

---

##### `ldap_idmap`<sup>Optional</sup> <a name="ldap_idmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.ldapIdmap"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

ldap_idmap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}.

---

##### `requested_throughput`<sup>Optional</sup> <a name="requested_throughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.requestedThroughput"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos">put_kerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap">put_ldap_idmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel">reset_hostname_label</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType">reset_idmap_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos">reset_kerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap">reset_ldap_idmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput">reset_requested_throughput</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_kerberos` <a name="put_kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos"></a>

```python
def put_kerberos(
  kerberos_realm: str,
  backup_key_tab_secret_version: typing.Union[int, float] = None,
  current_key_tab_secret_version: typing.Union[int, float] = None,
  is_kerberos_enabled: typing.Union[bool, IResolvable] = None,
  key_tab_secret_id: str = None
) -> None
```

###### `kerberos_realm`<sup>Required</sup> <a name="kerberos_realm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.kerberosRealm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}.

---

###### `backup_key_tab_secret_version`<sup>Optional</sup> <a name="backup_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.backupKeyTabSecretVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}.

---

###### `current_key_tab_secret_version`<sup>Optional</sup> <a name="current_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.currentKeyTabSecretVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}.

---

###### `is_kerberos_enabled`<sup>Optional</sup> <a name="is_kerberos_enabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.isKerberosEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}.

---

###### `key_tab_secret_id`<sup>Optional</sup> <a name="key_tab_secret_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.keyTabSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}.

---

##### `put_ldap_idmap` <a name="put_ldap_idmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap"></a>

```python
def put_ldap_idmap(
  cache_lifetime_seconds: typing.Union[int, float] = None,
  cache_refresh_interval_seconds: typing.Union[int, float] = None,
  group_search_base: str = None,
  negative_cache_lifetime_seconds: typing.Union[int, float] = None,
  outbound_connector1_id: str = None,
  outbound_connector2_id: str = None,
  schema_type: str = None,
  user_search_base: str = None
) -> None
```

###### `cache_lifetime_seconds`<sup>Optional</sup> <a name="cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.cacheLifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}.

---

###### `cache_refresh_interval_seconds`<sup>Optional</sup> <a name="cache_refresh_interval_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.cacheRefreshIntervalSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}.

---

###### `group_search_base`<sup>Optional</sup> <a name="group_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.groupSearchBase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}.

---

###### `negative_cache_lifetime_seconds`<sup>Optional</sup> <a name="negative_cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.negativeCacheLifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}.

---

###### `outbound_connector1_id`<sup>Optional</sup> <a name="outbound_connector1_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.outboundConnector1Id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}.

---

###### `outbound_connector2_id`<sup>Optional</sup> <a name="outbound_connector2_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.outboundConnector2Id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}.

---

###### `schema_type`<sup>Optional</sup> <a name="schema_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.schemaType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}.

---

###### `user_search_base`<sup>Optional</sup> <a name="user_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.userSearchBase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}.

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[FileStorageMountTargetLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hostname_label` <a name="reset_hostname_label" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel"></a>

```python
def reset_hostname_label() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idmap_type` <a name="reset_idmap_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType"></a>

```python
def reset_idmap_type() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_kerberos` <a name="reset_kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos"></a>

```python
def reset_kerberos() -> None
```

##### `reset_ldap_idmap` <a name="reset_ldap_idmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap"></a>

```python
def reset_ldap_idmap() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_requested_throughput` <a name="reset_requested_throughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput"></a>

```python
def reset_requested_throughput() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FileStorageMountTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FileStorageMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId">export_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap">ldap_idmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput">observed_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds">private_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity">reserved_storage_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd">time_billing_cycle_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput">hostname_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput">idmap_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput">kerberos_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput">ldap_idmap_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput">requested_throughput_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType">idmap_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput">requested_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_set_id`<sup>Required</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId"></a>

```python
export_set_id: str
```

- *Type:* str

---

##### `kerberos`<sup>Required</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos"></a>

```python
kerberos: FileStorageMountTargetKerberosOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a>

---

##### `ldap_idmap`<sup>Required</sup> <a name="ldap_idmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap"></a>

```python
ldap_idmap: FileStorageMountTargetLdapIdmapOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks"></a>

```python
locks: FileStorageMountTargetLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a>

---

##### `observed_throughput`<sup>Required</sup> <a name="observed_throughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput"></a>

```python
observed_throughput: str
```

- *Type:* str

---

##### `private_ip_ids`<sup>Required</sup> <a name="private_ip_ids" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds"></a>

```python
private_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reserved_storage_capacity`<sup>Required</sup> <a name="reserved_storage_capacity" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity"></a>

```python
reserved_storage_capacity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_billing_cycle_end`<sup>Required</sup> <a name="time_billing_cycle_end" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd"></a>

```python
time_billing_cycle_end: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts"></a>

```python
timeouts: FileStorageMountTargetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label_input`<sup>Optional</sup> <a name="hostname_label_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput"></a>

```python
hostname_label_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idmap_type_input`<sup>Optional</sup> <a name="idmap_type_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput"></a>

```python
idmap_type_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos_input`<sup>Optional</sup> <a name="kerberos_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput"></a>

```python
kerberos_input: FileStorageMountTargetKerberos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `ldap_idmap_input`<sup>Optional</sup> <a name="ldap_idmap_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput"></a>

```python
ldap_idmap_input: FileStorageMountTargetLdapIdmap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[FileStorageMountTargetLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requested_throughput_input`<sup>Optional</sup> <a name="requested_throughput_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput"></a>

```python
requested_throughput_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FileStorageMountTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idmap_type`<sup>Required</sup> <a name="idmap_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType"></a>

```python
idmap_type: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requested_throughput`<sup>Required</sup> <a name="requested_throughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput"></a>

```python
requested_throughput: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageMountTargetConfig <a name="FileStorageMountTargetConfig" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  subnet_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hostname_label: str = None,
  id: str = None,
  idmap_type: str = None,
  ip_address: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  kerberos: FileStorageMountTargetKerberos = None,
  ldap_idmap: FileStorageMountTargetLdapIdmap = None,
  locks: typing.Union[IResolvable, typing.List[FileStorageMountTargetLocks]] = None,
  nsg_ids: typing.List[str] = None,
  requested_throughput: str = None,
  timeouts: FileStorageMountTargetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType">idmap_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos">kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | kerberos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap">ldap_idmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | ldap_idmap block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput">requested_throughput</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}.

---

##### `hostname_label`<sup>Optional</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idmap_type`<sup>Optional</sup> <a name="idmap_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType"></a>

```python
idmap_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}.

---

##### `kerberos`<sup>Optional</sup> <a name="kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos"></a>

```python
kerberos: FileStorageMountTargetKerberos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}

---

##### `ldap_idmap`<sup>Optional</sup> <a name="ldap_idmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap"></a>

```python
ldap_idmap: FileStorageMountTargetLdapIdmap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

ldap_idmap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[FileStorageMountTargetLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}.

---

##### `requested_throughput`<sup>Optional</sup> <a name="requested_throughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput"></a>

```python
requested_throughput: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts"></a>

```python
timeouts: FileStorageMountTargetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}

---

### FileStorageMountTargetKerberos <a name="FileStorageMountTargetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetKerberos(
  kerberos_realm: str,
  backup_key_tab_secret_version: typing.Union[int, float] = None,
  current_key_tab_secret_version: typing.Union[int, float] = None,
  is_kerberos_enabled: typing.Union[bool, IResolvable] = None,
  key_tab_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm">kerberos_realm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion">backup_key_tab_secret_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion">current_key_tab_secret_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled">is_kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId">key_tab_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}. |

---

##### `kerberos_realm`<sup>Required</sup> <a name="kerberos_realm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm"></a>

```python
kerberos_realm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}.

---

##### `backup_key_tab_secret_version`<sup>Optional</sup> <a name="backup_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion"></a>

```python
backup_key_tab_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}.

---

##### `current_key_tab_secret_version`<sup>Optional</sup> <a name="current_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion"></a>

```python
current_key_tab_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}.

---

##### `is_kerberos_enabled`<sup>Optional</sup> <a name="is_kerberos_enabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled"></a>

```python
is_kerberos_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}.

---

##### `key_tab_secret_id`<sup>Optional</sup> <a name="key_tab_secret_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId"></a>

```python
key_tab_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}.

---

### FileStorageMountTargetLdapIdmap <a name="FileStorageMountTargetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetLdapIdmap(
  cache_lifetime_seconds: typing.Union[int, float] = None,
  cache_refresh_interval_seconds: typing.Union[int, float] = None,
  group_search_base: str = None,
  negative_cache_lifetime_seconds: typing.Union[int, float] = None,
  outbound_connector1_id: str = None,
  outbound_connector2_id: str = None,
  schema_type: str = None,
  user_search_base: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds">cache_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds">cache_refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase">group_search_base</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds">negative_cache_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id">outbound_connector1_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id">outbound_connector2_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType">schema_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase">user_search_base</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}. |

---

##### `cache_lifetime_seconds`<sup>Optional</sup> <a name="cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds"></a>

```python
cache_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}.

---

##### `cache_refresh_interval_seconds`<sup>Optional</sup> <a name="cache_refresh_interval_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds"></a>

```python
cache_refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}.

---

##### `group_search_base`<sup>Optional</sup> <a name="group_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase"></a>

```python
group_search_base: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}.

---

##### `negative_cache_lifetime_seconds`<sup>Optional</sup> <a name="negative_cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds"></a>

```python
negative_cache_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}.

---

##### `outbound_connector1_id`<sup>Optional</sup> <a name="outbound_connector1_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id"></a>

```python
outbound_connector1_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}.

---

##### `outbound_connector2_id`<sup>Optional</sup> <a name="outbound_connector2_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id"></a>

```python
outbound_connector2_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}.

---

##### `schema_type`<sup>Optional</sup> <a name="schema_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}.

---

##### `user_search_base`<sup>Optional</sup> <a name="user_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase"></a>

```python
user_search_base: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}.

---

### FileStorageMountTargetLocks <a name="FileStorageMountTargetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetLocks(
  type: str,
  message: str = None,
  related_resource_id: str = None,
  time_created: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}.

---

### FileStorageMountTargetTimeouts <a name="FileStorageMountTargetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageMountTargetKerberosOutputReference <a name="FileStorageMountTargetKerberosOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion">reset_backup_key_tab_secret_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion">reset_current_key_tab_secret_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled">reset_is_kerberos_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId">reset_key_tab_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_backup_key_tab_secret_version` <a name="reset_backup_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion"></a>

```python
def reset_backup_key_tab_secret_version() -> None
```

##### `reset_current_key_tab_secret_version` <a name="reset_current_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion"></a>

```python
def reset_current_key_tab_secret_version() -> None
```

##### `reset_is_kerberos_enabled` <a name="reset_is_kerberos_enabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled"></a>

```python
def reset_is_kerberos_enabled() -> None
```

##### `reset_key_tab_secret_id` <a name="reset_key_tab_secret_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId"></a>

```python
def reset_key_tab_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput">backup_key_tab_secret_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput">current_key_tab_secret_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput">is_kerberos_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput">kerberos_realm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput">key_tab_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion">backup_key_tab_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion">current_key_tab_secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled">is_kerberos_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm">kerberos_realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId">key_tab_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_key_tab_secret_version_input`<sup>Optional</sup> <a name="backup_key_tab_secret_version_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput"></a>

```python
backup_key_tab_secret_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_key_tab_secret_version_input`<sup>Optional</sup> <a name="current_key_tab_secret_version_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput"></a>

```python
current_key_tab_secret_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_kerberos_enabled_input`<sup>Optional</sup> <a name="is_kerberos_enabled_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput"></a>

```python
is_kerberos_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos_realm_input`<sup>Optional</sup> <a name="kerberos_realm_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput"></a>

```python
kerberos_realm_input: str
```

- *Type:* str

---

##### `key_tab_secret_id_input`<sup>Optional</sup> <a name="key_tab_secret_id_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput"></a>

```python
key_tab_secret_id_input: str
```

- *Type:* str

---

##### `backup_key_tab_secret_version`<sup>Required</sup> <a name="backup_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion"></a>

```python
backup_key_tab_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_key_tab_secret_version`<sup>Required</sup> <a name="current_key_tab_secret_version" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion"></a>

```python
current_key_tab_secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_kerberos_enabled`<sup>Required</sup> <a name="is_kerberos_enabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled"></a>

```python
is_kerberos_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kerberos_realm`<sup>Required</sup> <a name="kerberos_realm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm"></a>

```python
kerberos_realm: str
```

- *Type:* str

---

##### `key_tab_secret_id`<sup>Required</sup> <a name="key_tab_secret_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId"></a>

```python
key_tab_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue"></a>

```python
internal_value: FileStorageMountTargetKerberos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---


### FileStorageMountTargetLdapIdmapOutputReference <a name="FileStorageMountTargetLdapIdmapOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds">reset_cache_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds">reset_cache_refresh_interval_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase">reset_group_search_base</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds">reset_negative_cache_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id">reset_outbound_connector1_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id">reset_outbound_connector2_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType">reset_schema_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase">reset_user_search_base</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_lifetime_seconds` <a name="reset_cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds"></a>

```python
def reset_cache_lifetime_seconds() -> None
```

##### `reset_cache_refresh_interval_seconds` <a name="reset_cache_refresh_interval_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds"></a>

```python
def reset_cache_refresh_interval_seconds() -> None
```

##### `reset_group_search_base` <a name="reset_group_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase"></a>

```python
def reset_group_search_base() -> None
```

##### `reset_negative_cache_lifetime_seconds` <a name="reset_negative_cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds"></a>

```python
def reset_negative_cache_lifetime_seconds() -> None
```

##### `reset_outbound_connector1_id` <a name="reset_outbound_connector1_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id"></a>

```python
def reset_outbound_connector1_id() -> None
```

##### `reset_outbound_connector2_id` <a name="reset_outbound_connector2_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id"></a>

```python
def reset_outbound_connector2_id() -> None
```

##### `reset_schema_type` <a name="reset_schema_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType"></a>

```python
def reset_schema_type() -> None
```

##### `reset_user_search_base` <a name="reset_user_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase"></a>

```python
def reset_user_search_base() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput">cache_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput">cache_refresh_interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput">group_search_base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput">negative_cache_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput">outbound_connector1_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput">outbound_connector2_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput">schema_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput">user_search_base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds">cache_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds">cache_refresh_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase">group_search_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds">negative_cache_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id">outbound_connector1_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id">outbound_connector2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType">schema_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase">user_search_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_lifetime_seconds_input`<sup>Optional</sup> <a name="cache_lifetime_seconds_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput"></a>

```python
cache_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_refresh_interval_seconds_input`<sup>Optional</sup> <a name="cache_refresh_interval_seconds_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput"></a>

```python
cache_refresh_interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_search_base_input`<sup>Optional</sup> <a name="group_search_base_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput"></a>

```python
group_search_base_input: str
```

- *Type:* str

---

##### `negative_cache_lifetime_seconds_input`<sup>Optional</sup> <a name="negative_cache_lifetime_seconds_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput"></a>

```python
negative_cache_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `outbound_connector1_id_input`<sup>Optional</sup> <a name="outbound_connector1_id_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput"></a>

```python
outbound_connector1_id_input: str
```

- *Type:* str

---

##### `outbound_connector2_id_input`<sup>Optional</sup> <a name="outbound_connector2_id_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput"></a>

```python
outbound_connector2_id_input: str
```

- *Type:* str

---

##### `schema_type_input`<sup>Optional</sup> <a name="schema_type_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput"></a>

```python
schema_type_input: str
```

- *Type:* str

---

##### `user_search_base_input`<sup>Optional</sup> <a name="user_search_base_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput"></a>

```python
user_search_base_input: str
```

- *Type:* str

---

##### `cache_lifetime_seconds`<sup>Required</sup> <a name="cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds"></a>

```python
cache_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_refresh_interval_seconds`<sup>Required</sup> <a name="cache_refresh_interval_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds"></a>

```python
cache_refresh_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_search_base`<sup>Required</sup> <a name="group_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase"></a>

```python
group_search_base: str
```

- *Type:* str

---

##### `negative_cache_lifetime_seconds`<sup>Required</sup> <a name="negative_cache_lifetime_seconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds"></a>

```python
negative_cache_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `outbound_connector1_id`<sup>Required</sup> <a name="outbound_connector1_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id"></a>

```python
outbound_connector1_id: str
```

- *Type:* str

---

##### `outbound_connector2_id`<sup>Required</sup> <a name="outbound_connector2_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id"></a>

```python
outbound_connector2_id: str
```

- *Type:* str

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

---

##### `user_search_base`<sup>Required</sup> <a name="user_search_base" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase"></a>

```python
user_search_base: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue"></a>

```python
internal_value: FileStorageMountTargetLdapIdmap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---


### FileStorageMountTargetLocksList <a name="FileStorageMountTargetLocksList" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileStorageMountTargetLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FileStorageMountTargetLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]]

---


### FileStorageMountTargetLocksOutputReference <a name="FileStorageMountTargetLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageMountTargetLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks">FileStorageMountTargetLocks</a>]

---


### FileStorageMountTargetTimeoutsOutputReference <a name="FileStorageMountTargetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_mount_target

fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageMountTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>]

---




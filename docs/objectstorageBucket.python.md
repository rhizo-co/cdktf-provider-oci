# `objectstorageBucket` Submodule <a name="`objectstorageBucket` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageBucket <a name="ObjectstorageBucket" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket oci_objectstorage_bucket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucket(
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
  name: str,
  namespace: str,
  access_type: str = None,
  auto_tiering: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  kms_key_id: str = None,
  metadata: typing.Mapping[str] = None,
  object_events_enabled: typing.Union[bool, IResolvable] = None,
  retention_rules: typing.Union[IResolvable, typing.List[ObjectstorageBucketRetentionRules]] = None,
  storage_tier: str = None,
  timeouts: ObjectstorageBucketTimeouts = None,
  versioning: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.autoTiering">auto_tiering</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.objectEventsEnabled">object_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.retentionRules">retention_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]</code> | retention_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.versioning">versioning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}.

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.accessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}.

---

##### `auto_tiering`<sup>Optional</sup> <a name="auto_tiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.autoTiering"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}.

---

##### `object_events_enabled`<sup>Optional</sup> <a name="object_events_enabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.objectEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}.

---

##### `retention_rules`<sup>Optional</sup> <a name="retention_rules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.retentionRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]

retention_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#retention_rules ObjectstorageBucket#retention_rules}

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.storageTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#timeouts ObjectstorageBucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.Initializer.parameter.versioning"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putRetentionRules">put_retention_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAutoTiering">reset_auto_tiering</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetObjectEventsEnabled">reset_object_events_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetRetentionRules">reset_retention_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetStorageTier">reset_storage_tier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetVersioning">reset_versioning</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_retention_rules` <a name="put_retention_rules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putRetentionRules"></a>

```python
def put_retention_rules(
  value: typing.Union[IResolvable, typing.List[ObjectstorageBucketRetentionRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putRetentionRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#create ObjectstorageBucket#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#delete ObjectstorageBucket#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#update ObjectstorageBucket#update}.

---

##### `reset_access_type` <a name="reset_access_type" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_auto_tiering` <a name="reset_auto_tiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetAutoTiering"></a>

```python
def reset_auto_tiering() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_object_events_enabled` <a name="reset_object_events_enabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetObjectEventsEnabled"></a>

```python
def reset_object_events_enabled() -> None
```

##### `reset_retention_rules` <a name="reset_retention_rules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetRetentionRules"></a>

```python
def reset_retention_rules() -> None
```

##### `reset_storage_tier` <a name="reset_storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetStorageTier"></a>

```python
def reset_storage_tier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.resetVersioning"></a>

```python
def reset_versioning() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObjectstorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObjectstorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObjectstorageBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObjectstorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateCount">approximate_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateSize">approximate_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.bucketId">bucket_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.isReadOnly">is_read_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectLifecyclePolicyEtag">object_lifecycle_policy_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.replicationEnabled">replication_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRules">retention_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList">ObjectstorageBucketRetentionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference">ObjectstorageBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTieringInput">auto_tiering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabledInput">object_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRulesInput">retention_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTierInput">storage_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioningInput">versioning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTiering">auto_tiering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabled">object_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTier">storage_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioning">versioning</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approximate_count`<sup>Required</sup> <a name="approximate_count" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateCount"></a>

```python
approximate_count: str
```

- *Type:* str

---

##### `approximate_size`<sup>Required</sup> <a name="approximate_size" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.approximateSize"></a>

```python
approximate_size: str
```

- *Type:* str

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.bucketId"></a>

```python
bucket_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `is_read_only`<sup>Required</sup> <a name="is_read_only" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.isReadOnly"></a>

```python
is_read_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `object_lifecycle_policy_etag`<sup>Required</sup> <a name="object_lifecycle_policy_etag" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectLifecyclePolicyEtag"></a>

```python
object_lifecycle_policy_etag: str
```

- *Type:* str

---

##### `replication_enabled`<sup>Required</sup> <a name="replication_enabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.replicationEnabled"></a>

```python
replication_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `retention_rules`<sup>Required</sup> <a name="retention_rules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRules"></a>

```python
retention_rules: ObjectstorageBucketRetentionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList">ObjectstorageBucketRetentionRulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeouts"></a>

```python
timeouts: ObjectstorageBucketTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference">ObjectstorageBucketTimeoutsOutputReference</a>

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `auto_tiering_input`<sup>Optional</sup> <a name="auto_tiering_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTieringInput"></a>

```python
auto_tiering_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_events_enabled_input`<sup>Optional</sup> <a name="object_events_enabled_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabledInput"></a>

```python
object_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_rules_input`<sup>Optional</sup> <a name="retention_rules_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.retentionRulesInput"></a>

```python
retention_rules_input: typing.Union[IResolvable, typing.List[ObjectstorageBucketRetentionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]

---

##### `storage_tier_input`<sup>Optional</sup> <a name="storage_tier_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTierInput"></a>

```python
storage_tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ObjectstorageBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>]

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioningInput"></a>

```python
versioning_input: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `auto_tiering`<sup>Required</sup> <a name="auto_tiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.autoTiering"></a>

```python
auto_tiering: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_events_enabled`<sup>Required</sup> <a name="object_events_enabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.objectEventsEnabled"></a>

```python
object_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `storage_tier`<sup>Required</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.versioning"></a>

```python
versioning: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageBucketConfig <a name="ObjectstorageBucketConfig" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  namespace: str,
  access_type: str = None,
  auto_tiering: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  kms_key_id: str = None,
  metadata: typing.Mapping[str] = None,
  object_events_enabled: typing.Union[bool, IResolvable] = None,
  retention_rules: typing.Union[IResolvable, typing.List[ObjectstorageBucketRetentionRules]] = None,
  storage_tier: str = None,
  timeouts: ObjectstorageBucketTimeouts = None,
  versioning: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.autoTiering">auto_tiering</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.objectEventsEnabled">object_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.retentionRules">retention_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]</code> | retention_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.versioning">versioning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#compartment_id ObjectstorageBucket#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#name ObjectstorageBucket#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#namespace ObjectstorageBucket#namespace}.

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#access_type ObjectstorageBucket#access_type}.

---

##### `auto_tiering`<sup>Optional</sup> <a name="auto_tiering" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.autoTiering"></a>

```python
auto_tiering: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#auto_tiering ObjectstorageBucket#auto_tiering}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#defined_tags ObjectstorageBucket#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#freeform_tags ObjectstorageBucket#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#id ObjectstorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#kms_key_id ObjectstorageBucket#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#metadata ObjectstorageBucket#metadata}.

---

##### `object_events_enabled`<sup>Optional</sup> <a name="object_events_enabled" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.objectEventsEnabled"></a>

```python
object_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#object_events_enabled ObjectstorageBucket#object_events_enabled}.

---

##### `retention_rules`<sup>Optional</sup> <a name="retention_rules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.retentionRules"></a>

```python
retention_rules: typing.Union[IResolvable, typing.List[ObjectstorageBucketRetentionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]

retention_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#retention_rules ObjectstorageBucket#retention_rules}

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#storage_tier ObjectstorageBucket#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.timeouts"></a>

```python
timeouts: ObjectstorageBucketTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#timeouts ObjectstorageBucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketConfig.property.versioning"></a>

```python
versioning: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#versioning ObjectstorageBucket#versioning}.

---

### ObjectstorageBucketRetentionRules <a name="ObjectstorageBucketRetentionRules" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketRetentionRules(
  display_name: str,
  duration: ObjectstorageBucketRetentionRulesDuration = None,
  time_rule_locked: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#display_name ObjectstorageBucket#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.duration">duration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a></code> | duration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.timeRuleLocked">time_rule_locked</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_rule_locked ObjectstorageBucket#time_rule_locked}. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#display_name ObjectstorageBucket#display_name}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.duration"></a>

```python
duration: ObjectstorageBucketRetentionRulesDuration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#duration ObjectstorageBucket#duration}

---

##### `time_rule_locked`<sup>Optional</sup> <a name="time_rule_locked" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules.property.timeRuleLocked"></a>

```python
time_rule_locked: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_rule_locked ObjectstorageBucket#time_rule_locked}.

---

### ObjectstorageBucketRetentionRulesDuration <a name="ObjectstorageBucketRetentionRulesDuration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketRetentionRulesDuration(
  time_amount: str,
  time_unit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeAmount">time_amount</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_amount ObjectstorageBucket#time_amount}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeUnit">time_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_unit ObjectstorageBucket#time_unit}. |

---

##### `time_amount`<sup>Required</sup> <a name="time_amount" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeAmount"></a>

```python
time_amount: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_amount ObjectstorageBucket#time_amount}.

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_unit ObjectstorageBucket#time_unit}.

---

### ObjectstorageBucketTimeouts <a name="ObjectstorageBucketTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#create ObjectstorageBucket#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#delete ObjectstorageBucket#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#update ObjectstorageBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#create ObjectstorageBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#delete ObjectstorageBucket#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#update ObjectstorageBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageBucketRetentionRulesDurationOutputReference <a name="ObjectstorageBucketRetentionRulesDurationOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmountInput">time_amount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmount">time_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_amount_input`<sup>Optional</sup> <a name="time_amount_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmountInput"></a>

```python
time_amount_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `time_amount`<sup>Required</sup> <a name="time_amount" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeAmount"></a>

```python
time_amount: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference.property.internalValue"></a>

```python
internal_value: ObjectstorageBucketRetentionRulesDuration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a>

---


### ObjectstorageBucketRetentionRulesList <a name="ObjectstorageBucketRetentionRulesList" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketRetentionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObjectstorageBucketRetentionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ObjectstorageBucketRetentionRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]]

---


### ObjectstorageBucketRetentionRulesOutputReference <a name="ObjectstorageBucketRetentionRulesOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.putDuration">put_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetTimeRuleLocked">reset_time_rule_locked</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duration` <a name="put_duration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.putDuration"></a>

```python
def put_duration(
  time_amount: str,
  time_unit: str
) -> None
```

###### `time_amount`<sup>Required</sup> <a name="time_amount" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.putDuration.parameter.timeAmount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_amount ObjectstorageBucket#time_amount}.

---

###### `time_unit`<sup>Required</sup> <a name="time_unit" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.putDuration.parameter.timeUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_bucket#time_unit ObjectstorageBucket#time_unit}.

---

##### `reset_duration` <a name="reset_duration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_time_rule_locked` <a name="reset_time_rule_locked" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.resetTimeRuleLocked"></a>

```python
def reset_time_rule_locked() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.duration">duration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference">ObjectstorageBucketRetentionRulesDurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.retentionRuleId">retention_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.durationInput">duration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLockedInput">time_rule_locked_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLocked">time_rule_locked</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.duration"></a>

```python
duration: ObjectstorageBucketRetentionRulesDurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDurationOutputReference">ObjectstorageBucketRetentionRulesDurationOutputReference</a>

---

##### `retention_rule_id`<sup>Required</sup> <a name="retention_rule_id" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.retentionRuleId"></a>

```python
retention_rule_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.durationInput"></a>

```python
duration_input: ObjectstorageBucketRetentionRulesDuration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesDuration">ObjectstorageBucketRetentionRulesDuration</a>

---

##### `time_rule_locked_input`<sup>Optional</sup> <a name="time_rule_locked_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLockedInput"></a>

```python
time_rule_locked_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `time_rule_locked`<sup>Required</sup> <a name="time_rule_locked" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.timeRuleLocked"></a>

```python
time_rule_locked: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObjectstorageBucketRetentionRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketRetentionRules">ObjectstorageBucketRetentionRules</a>]

---


### ObjectstorageBucketTimeoutsOutputReference <a name="ObjectstorageBucketTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_bucket

objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObjectstorageBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageBucket.ObjectstorageBucketTimeouts">ObjectstorageBucketTimeouts</a>]

---




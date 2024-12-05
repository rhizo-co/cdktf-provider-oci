# `objectstorageObject` Submodule <a name="`objectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.objectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageObject <a name="ObjectstorageObject" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  namespace: str,
  object: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_md5: str = None,
  content_type: str = None,
  delete_all_object_versions: typing.Union[bool, IResolvable] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  opc_sse_kms_key_id: str = None,
  source: str = None,
  source_uri_details: ObjectstorageObjectSourceUriDetails = None,
  storage_tier: str = None,
  timeouts: ObjectstorageObjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentMd5">content_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.deleteAllObjectVersions">delete_all_object_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.opcSseKmsKeyId">opc_sse_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.sourceUriDetails">source_uri_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | source_uri_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.cacheControl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}.

---

##### `content_md5`<sup>Optional</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}.

---

##### `delete_all_object_versions`<sup>Optional</sup> <a name="delete_all_object_versions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.deleteAllObjectVersions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}.

---

##### `opc_sse_kms_key_id`<sup>Optional</sup> <a name="opc_sse_kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.opcSseKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}.

---

##### `source_uri_details`<sup>Optional</sup> <a name="source_uri_details" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.sourceUriDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

source_uri_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_uri_details ObjectstorageObject#source_uri_details}

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.storageTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#timeouts ObjectstorageObject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails">put_source_uri_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5">reset_content_md5</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions">reset_delete_all_object_versions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId">reset_opc_sse_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails">reset_source_uri_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier">reset_storage_tier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source_uri_details` <a name="put_source_uri_details" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails"></a>

```python
def put_source_uri_details(
  bucket: str,
  namespace: str,
  object: str,
  region: str,
  destination_object_if_match_etag: str = None,
  destination_object_if_none_match_etag: str = None,
  source_object_if_match_etag: str = None,
  source_version_id: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

###### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

###### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}.

---

###### `destination_object_if_match_etag`<sup>Optional</sup> <a name="destination_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.destinationObjectIfMatchEtag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}.

---

###### `destination_object_if_none_match_etag`<sup>Optional</sup> <a name="destination_object_if_none_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.destinationObjectIfNoneMatchEtag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}.

---

###### `source_object_if_match_etag`<sup>Optional</sup> <a name="source_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.sourceObjectIfMatchEtag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}.

---

###### `source_version_id`<sup>Optional</sup> <a name="source_version_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putSourceUriDetails.parameter.sourceVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}.

---

##### `reset_cache_control` <a name="reset_cache_control" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content` <a name="reset_content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_md5` <a name="reset_content_md5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentMd5"></a>

```python
def reset_content_md5() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_delete_all_object_versions` <a name="reset_delete_all_object_versions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetDeleteAllObjectVersions"></a>

```python
def reset_delete_all_object_versions() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_opc_sse_kms_key_id` <a name="reset_opc_sse_kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetOpcSseKmsKeyId"></a>

```python
def reset_opc_sse_kms_key_id() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_uri_details` <a name="reset_source_uri_details" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetSourceUriDetails"></a>

```python
def reset_source_uri_details() -> None
```

##### `reset_storage_tier` <a name="reset_storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetStorageTier"></a>

```python
def reset_storage_tier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObjectstorageObject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength">content_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails">source_uri_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input">content_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput">delete_all_object_versions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput">opc_sse_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput">source_uri_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput">storage_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions">delete_all_object_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId">opc_sse_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier">storage_tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLength"></a>

```python
content_length: str
```

- *Type:* str

---

##### `source_uri_details`<sup>Required</sup> <a name="source_uri_details" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetails"></a>

```python
source_uri_details: ObjectstorageObjectSourceUriDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference">ObjectstorageObjectSourceUriDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeouts"></a>

```python
timeouts: ObjectstorageObjectTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference">ObjectstorageObjectTimeoutsOutputReference</a>

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_md5_input`<sup>Optional</sup> <a name="content_md5_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5Input"></a>

```python
content_md5_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `delete_all_object_versions_input`<sup>Optional</sup> <a name="delete_all_object_versions_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersionsInput"></a>

```python
delete_all_object_versions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `opc_sse_kms_key_id_input`<sup>Optional</sup> <a name="opc_sse_kms_key_id_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyIdInput"></a>

```python
opc_sse_kms_key_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_uri_details_input`<sup>Optional</sup> <a name="source_uri_details_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.sourceUriDetailsInput"></a>

```python
source_uri_details_input: ObjectstorageObjectSourceUriDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---

##### `storage_tier_input`<sup>Optional</sup> <a name="storage_tier_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTierInput"></a>

```python
storage_tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ObjectstorageObjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `delete_all_object_versions`<sup>Required</sup> <a name="delete_all_object_versions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.deleteAllObjectVersions"></a>

```python
delete_all_object_versions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `opc_sse_kms_key_id`<sup>Required</sup> <a name="opc_sse_kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.opcSseKmsKeyId"></a>

```python
opc_sse_kms_key_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `storage_tier`<sup>Required</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageObjectConfig <a name="ObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  namespace: str,
  object: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_md5: str = None,
  content_type: str = None,
  delete_all_object_versions: typing.Union[bool, IResolvable] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  opc_sse_kms_key_id: str = None,
  source: str = None,
  source_uri_details: ObjectstorageObjectSourceUriDetails = None,
  storage_tier: str = None,
  timeouts: ObjectstorageObjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5">content_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions">delete_all_object_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId">opc_sse_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails">source_uri_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | source_uri_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content ObjectstorageObject#content}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}.

---

##### `content_md5`<sup>Optional</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}.

---

##### `delete_all_object_versions`<sup>Optional</sup> <a name="delete_all_object_versions" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.deleteAllObjectVersions"></a>

```python
delete_all_object_versions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#id ObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}.

---

##### `opc_sse_kms_key_id`<sup>Optional</sup> <a name="opc_sse_kms_key_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.opcSseKmsKeyId"></a>

```python
opc_sse_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source ObjectstorageObject#source}.

---

##### `source_uri_details`<sup>Optional</sup> <a name="source_uri_details" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.sourceUriDetails"></a>

```python
source_uri_details: ObjectstorageObjectSourceUriDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

source_uri_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_uri_details ObjectstorageObject#source_uri_details}

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectConfig.property.timeouts"></a>

```python
timeouts: ObjectstorageObjectTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#timeouts ObjectstorageObject#timeouts}

---

### ObjectstorageObjectSourceUriDetails <a name="ObjectstorageObjectSourceUriDetails" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObjectSourceUriDetails(
  bucket: str,
  namespace: str,
  object: str,
  region: str,
  destination_object_if_match_etag: str = None,
  destination_object_if_none_match_etag: str = None,
  source_object_if_match_etag: str = None,
  source_version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag">destination_object_if_match_etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag">destination_object_if_none_match_etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag">source_object_if_match_etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId">source_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#object ObjectstorageObject#object}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#region ObjectstorageObject#region}.

---

##### `destination_object_if_match_etag`<sup>Optional</sup> <a name="destination_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfMatchEtag"></a>

```python
destination_object_if_match_etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}.

---

##### `destination_object_if_none_match_etag`<sup>Optional</sup> <a name="destination_object_if_none_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.destinationObjectIfNoneMatchEtag"></a>

```python
destination_object_if_none_match_etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}.

---

##### `source_object_if_match_etag`<sup>Optional</sup> <a name="source_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceObjectIfMatchEtag"></a>

```python
source_object_if_match_etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}.

---

##### `source_version_id`<sup>Optional</sup> <a name="source_version_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails.property.sourceVersionId"></a>

```python
source_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}.

---

### ObjectstorageObjectTimeouts <a name="ObjectstorageObjectTimeouts" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObjectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#create ObjectstorageObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/objectstorage_object#update ObjectstorageObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageObjectSourceUriDetailsOutputReference <a name="ObjectstorageObjectSourceUriDetailsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag">reset_destination_object_if_match_etag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag">reset_destination_object_if_none_match_etag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag">reset_source_object_if_match_etag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId">reset_source_version_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_object_if_match_etag` <a name="reset_destination_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfMatchEtag"></a>

```python
def reset_destination_object_if_match_etag() -> None
```

##### `reset_destination_object_if_none_match_etag` <a name="reset_destination_object_if_none_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetDestinationObjectIfNoneMatchEtag"></a>

```python
def reset_destination_object_if_none_match_etag() -> None
```

##### `reset_source_object_if_match_etag` <a name="reset_source_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceObjectIfMatchEtag"></a>

```python
def reset_source_object_if_match_etag() -> None
```

##### `reset_source_version_id` <a name="reset_source_version_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.resetSourceVersionId"></a>

```python
def reset_source_version_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput">destination_object_if_match_etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput">destination_object_if_none_match_etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput">source_object_if_match_etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput">source_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag">destination_object_if_match_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag">destination_object_if_none_match_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag">source_object_if_match_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId">source_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `destination_object_if_match_etag_input`<sup>Optional</sup> <a name="destination_object_if_match_etag_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtagInput"></a>

```python
destination_object_if_match_etag_input: str
```

- *Type:* str

---

##### `destination_object_if_none_match_etag_input`<sup>Optional</sup> <a name="destination_object_if_none_match_etag_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtagInput"></a>

```python
destination_object_if_none_match_etag_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_object_if_match_etag_input`<sup>Optional</sup> <a name="source_object_if_match_etag_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtagInput"></a>

```python
source_object_if_match_etag_input: str
```

- *Type:* str

---

##### `source_version_id_input`<sup>Optional</sup> <a name="source_version_id_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionIdInput"></a>

```python
source_version_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination_object_if_match_etag`<sup>Required</sup> <a name="destination_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfMatchEtag"></a>

```python
destination_object_if_match_etag: str
```

- *Type:* str

---

##### `destination_object_if_none_match_etag`<sup>Required</sup> <a name="destination_object_if_none_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.destinationObjectIfNoneMatchEtag"></a>

```python
destination_object_if_none_match_etag: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_object_if_match_etag`<sup>Required</sup> <a name="source_object_if_match_etag" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceObjectIfMatchEtag"></a>

```python
source_object_if_match_etag: str
```

- *Type:* str

---

##### `source_version_id`<sup>Required</sup> <a name="source_version_id" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.sourceVersionId"></a>

```python
source_version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ObjectstorageObjectSourceUriDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectSourceUriDetails">ObjectstorageObjectSourceUriDetails</a>

---


### ObjectstorageObjectTimeoutsOutputReference <a name="ObjectstorageObjectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import objectstorage_object

objectstorageObject.ObjectstorageObjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ObjectstorageObjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.objectstorageObject.ObjectstorageObjectTimeouts">ObjectstorageObjectTimeouts</a>]

---




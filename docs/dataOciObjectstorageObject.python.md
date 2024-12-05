# `dataOciObjectstorageObject` Submodule <a name="`dataOciObjectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObject <a name="DataOciObjectstorageObject" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_object

dataOciObjectstorageObject.DataOciObjectstorageObject(
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
  base64_encode_content: typing.Union[bool, IResolvable] = None,
  content_length_limit: typing.Union[int, float] = None,
  http_response_cache_control: str = None,
  http_response_content_disposition: str = None,
  http_response_content_encoding: str = None,
  http_response_content_language: str = None,
  http_response_content_type: str = None,
  http_response_expires: str = None,
  id: str = None,
  version_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.base64EncodeContent">base64_encode_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.contentLengthLimit">content_length_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseCacheControl">http_response_cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentDisposition">http_response_content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentEncoding">http_response_content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentLanguage">http_response_content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentType">http_response_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseExpires">http_response_expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}.

---

##### `base64_encode_content`<sup>Optional</sup> <a name="base64_encode_content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.base64EncodeContent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}.

---

##### `content_length_limit`<sup>Optional</sup> <a name="content_length_limit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.contentLengthLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}.

---

##### `http_response_cache_control`<sup>Optional</sup> <a name="http_response_cache_control" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseCacheControl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}.

---

##### `http_response_content_disposition`<sup>Optional</sup> <a name="http_response_content_disposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}.

---

##### `http_response_content_encoding`<sup>Optional</sup> <a name="http_response_content_encoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}.

---

##### `http_response_content_language`<sup>Optional</sup> <a name="http_response_content_language" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}.

---

##### `http_response_content_type`<sup>Optional</sup> <a name="http_response_content_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseContentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}.

---

##### `http_response_expires`<sup>Optional</sup> <a name="http_response_expires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.httpResponseExpires"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.versionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent">reset_base64_encode_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit">reset_content_length_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl">reset_http_response_cache_control</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition">reset_http_response_content_disposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding">reset_http_response_content_encoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage">reset_http_response_content_language</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType">reset_http_response_content_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires">reset_http_response_expires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId">reset_version_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_base64_encode_content` <a name="reset_base64_encode_content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent"></a>

```python
def reset_base64_encode_content() -> None
```

##### `reset_content_length_limit` <a name="reset_content_length_limit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit"></a>

```python
def reset_content_length_limit() -> None
```

##### `reset_http_response_cache_control` <a name="reset_http_response_cache_control" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl"></a>

```python
def reset_http_response_cache_control() -> None
```

##### `reset_http_response_content_disposition` <a name="reset_http_response_content_disposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition"></a>

```python
def reset_http_response_content_disposition() -> None
```

##### `reset_http_response_content_encoding` <a name="reset_http_response_content_encoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding"></a>

```python
def reset_http_response_content_encoding() -> None
```

##### `reset_http_response_content_language` <a name="reset_http_response_content_language" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage"></a>

```python
def reset_http_response_content_language() -> None
```

##### `reset_http_response_content_type` <a name="reset_http_response_content_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType"></a>

```python
def reset_http_response_content_type() -> None
```

##### `reset_http_response_expires` <a name="reset_http_response_expires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires"></a>

```python
def reset_http_response_expires() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId"></a>

```python
def reset_version_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_object

dataOciObjectstorageObject.DataOciObjectstorageObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_object

dataOciObjectstorageObject.DataOciObjectstorageObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_object

dataOciObjectstorageObject.DataOciObjectstorageObject.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_object

dataOciObjectstorageObject.DataOciObjectstorageObject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciObjectstorageObject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength">content_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier">storage_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput">base64_encode_content_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput">content_length_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput">http_response_cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput">http_response_content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput">http_response_content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput">http_response_content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput">http_response_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput">http_response_expires_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent">base64_encode_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit">content_length_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl">http_response_cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition">http_response_content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding">http_response_content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage">http_response_content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType">http_response_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires">http_response_expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength"></a>

```python
content_length: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `storage_tier`<sup>Required</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

---

##### `base64_encode_content_input`<sup>Optional</sup> <a name="base64_encode_content_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput"></a>

```python
base64_encode_content_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `content_length_limit_input`<sup>Optional</sup> <a name="content_length_limit_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput"></a>

```python
content_length_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_response_cache_control_input`<sup>Optional</sup> <a name="http_response_cache_control_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput"></a>

```python
http_response_cache_control_input: str
```

- *Type:* str

---

##### `http_response_content_disposition_input`<sup>Optional</sup> <a name="http_response_content_disposition_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput"></a>

```python
http_response_content_disposition_input: str
```

- *Type:* str

---

##### `http_response_content_encoding_input`<sup>Optional</sup> <a name="http_response_content_encoding_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput"></a>

```python
http_response_content_encoding_input: str
```

- *Type:* str

---

##### `http_response_content_language_input`<sup>Optional</sup> <a name="http_response_content_language_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput"></a>

```python
http_response_content_language_input: str
```

- *Type:* str

---

##### `http_response_content_type_input`<sup>Optional</sup> <a name="http_response_content_type_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput"></a>

```python
http_response_content_type_input: str
```

- *Type:* str

---

##### `http_response_expires_input`<sup>Optional</sup> <a name="http_response_expires_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput"></a>

```python
http_response_expires_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `base64_encode_content`<sup>Required</sup> <a name="base64_encode_content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent"></a>

```python
base64_encode_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `content_length_limit`<sup>Required</sup> <a name="content_length_limit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit"></a>

```python
content_length_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_response_cache_control`<sup>Required</sup> <a name="http_response_cache_control" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl"></a>

```python
http_response_cache_control: str
```

- *Type:* str

---

##### `http_response_content_disposition`<sup>Required</sup> <a name="http_response_content_disposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition"></a>

```python
http_response_content_disposition: str
```

- *Type:* str

---

##### `http_response_content_encoding`<sup>Required</sup> <a name="http_response_content_encoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding"></a>

```python
http_response_content_encoding: str
```

- *Type:* str

---

##### `http_response_content_language`<sup>Required</sup> <a name="http_response_content_language" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage"></a>

```python
http_response_content_language: str
```

- *Type:* str

---

##### `http_response_content_type`<sup>Required</sup> <a name="http_response_content_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType"></a>

```python
http_response_content_type: str
```

- *Type:* str

---

##### `http_response_expires`<sup>Required</sup> <a name="http_response_expires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires"></a>

```python
http_response_expires: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectConfig <a name="DataOciObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_object

dataOciObjectstorageObject.DataOciObjectstorageObjectConfig(
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
  base64_encode_content: typing.Union[bool, IResolvable] = None,
  content_length_limit: typing.Union[int, float] = None,
  http_response_cache_control: str = None,
  http_response_content_disposition: str = None,
  http_response_content_encoding: str = None,
  http_response_content_language: str = None,
  http_response_content_type: str = None,
  http_response_expires: str = None,
  id: str = None,
  version_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent">base64_encode_content</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit">content_length_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl">http_response_cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition">http_response_content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding">http_response_content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage">http_response_content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType">http_response_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires">http_response_expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}.

---

##### `base64_encode_content`<sup>Optional</sup> <a name="base64_encode_content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent"></a>

```python
base64_encode_content: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}.

---

##### `content_length_limit`<sup>Optional</sup> <a name="content_length_limit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit"></a>

```python
content_length_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}.

---

##### `http_response_cache_control`<sup>Optional</sup> <a name="http_response_cache_control" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl"></a>

```python
http_response_cache_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}.

---

##### `http_response_content_disposition`<sup>Optional</sup> <a name="http_response_content_disposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition"></a>

```python
http_response_content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}.

---

##### `http_response_content_encoding`<sup>Optional</sup> <a name="http_response_content_encoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding"></a>

```python
http_response_content_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}.

---

##### `http_response_content_language`<sup>Optional</sup> <a name="http_response_content_language" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage"></a>

```python
http_response_content_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}.

---

##### `http_response_content_type`<sup>Optional</sup> <a name="http_response_content_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType"></a>

```python
http_response_content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}.

---

##### `http_response_expires`<sup>Optional</sup> <a name="http_response_expires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires"></a>

```python
http_response_expires: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}.

---




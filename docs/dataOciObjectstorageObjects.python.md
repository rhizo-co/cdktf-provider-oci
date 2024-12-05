# `dataOciObjectstorageObjects` Submodule <a name="`dataOciObjectstorageObjects` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObjects <a name="DataOciObjectstorageObjects" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects oci_objectstorage_objects}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjects(
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
  delimiter: str = None,
  end: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciObjectstorageObjectsFilter]] = None,
  id: str = None,
  prefix: str = None,
  start: str = None,
  start_after: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#bucket DataOciObjectstorageObjects#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#namespace DataOciObjectstorageObjects#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#delimiter DataOciObjectstorageObjects#delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#end DataOciObjectstorageObjects#end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#id DataOciObjectstorageObjects#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#prefix DataOciObjectstorageObjects#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start DataOciObjectstorageObjects#start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.startAfter">start_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start_after DataOciObjectstorageObjects#start_after}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#bucket DataOciObjectstorageObjects#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#namespace DataOciObjectstorageObjects#namespace}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#delimiter DataOciObjectstorageObjects#delimiter}.

---

##### `end`<sup>Optional</sup> <a name="end" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#end DataOciObjectstorageObjects#end}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#filter DataOciObjectstorageObjects#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#id DataOciObjectstorageObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#prefix DataOciObjectstorageObjects#prefix}.

---

##### `start`<sup>Optional</sup> <a name="start" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start DataOciObjectstorageObjects#start}.

---

##### `start_after`<sup>Optional</sup> <a name="start_after" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.Initializer.parameter.startAfter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start_after DataOciObjectstorageObjects#start_after}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetStart">reset_start</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetStartAfter">reset_start_after</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciObjectstorageObjectsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]

---

##### `reset_delimiter` <a name="reset_delimiter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_end` <a name="reset_end" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_start` <a name="reset_start" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetStart"></a>

```python
def reset_start() -> None
```

##### `reset_start_after` <a name="reset_start_after" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.resetStartAfter"></a>

```python
def reset_start_after() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObjects resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjects.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjects.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjects.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjects.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciObjectstorageObjects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciObjectstorageObjects to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciObjectstorageObjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList">DataOciObjectstorageObjectsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.objects">objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList">DataOciObjectstorageObjectsObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.prefixes">prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.startAfterInput">start_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.startAfter">start_after</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.filter"></a>

```python
filter: DataOciObjectstorageObjectsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList">DataOciObjectstorageObjectsFilterList</a>

---

##### `objects`<sup>Required</sup> <a name="objects" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.objects"></a>

```python
objects: DataOciObjectstorageObjectsObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList">DataOciObjectstorageObjectsObjectsList</a>

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.prefixes"></a>

```python
prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciObjectstorageObjectsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `start_after_input`<sup>Optional</sup> <a name="start_after_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.startAfterInput"></a>

```python
start_after_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `start_after`<sup>Required</sup> <a name="start_after" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.startAfter"></a>

```python
start_after: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjects.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectsConfig <a name="DataOciObjectstorageObjectsConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  namespace: str,
  delimiter: str = None,
  end: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciObjectstorageObjectsFilter]] = None,
  id: str = None,
  prefix: str = None,
  start: str = None,
  start_after: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#bucket DataOciObjectstorageObjects#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#namespace DataOciObjectstorageObjects#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#delimiter DataOciObjectstorageObjects#delimiter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#end DataOciObjectstorageObjects#end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#id DataOciObjectstorageObjects#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#prefix DataOciObjectstorageObjects#prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start DataOciObjectstorageObjects#start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.startAfter">start_after</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start_after DataOciObjectstorageObjects#start_after}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#bucket DataOciObjectstorageObjects#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#namespace DataOciObjectstorageObjects#namespace}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#delimiter DataOciObjectstorageObjects#delimiter}.

---

##### `end`<sup>Optional</sup> <a name="end" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#end DataOciObjectstorageObjects#end}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciObjectstorageObjectsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#filter DataOciObjectstorageObjects#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#id DataOciObjectstorageObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#prefix DataOciObjectstorageObjects#prefix}.

---

##### `start`<sup>Optional</sup> <a name="start" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start DataOciObjectstorageObjects#start}.

---

##### `start_after`<sup>Optional</sup> <a name="start_after" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsConfig.property.startAfter"></a>

```python
start_after: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#start_after DataOciObjectstorageObjects#start_after}.

---

### DataOciObjectstorageObjectsFilter <a name="DataOciObjectstorageObjectsFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#name DataOciObjectstorageObjects#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#values DataOciObjectstorageObjects#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#regex DataOciObjectstorageObjects#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#name DataOciObjectstorageObjects#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#values DataOciObjectstorageObjects#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_objects#regex DataOciObjectstorageObjects#regex}.

---

### DataOciObjectstorageObjectsObjects <a name="DataOciObjectstorageObjectsObjects" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjects()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstorageObjectsFilterList <a name="DataOciObjectstorageObjectsFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciObjectstorageObjectsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciObjectstorageObjectsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]]

---


### DataOciObjectstorageObjectsFilterOutputReference <a name="DataOciObjectstorageObjectsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciObjectstorageObjectsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsFilter">DataOciObjectstorageObjectsFilter</a>]

---


### DataOciObjectstorageObjectsObjectsList <a name="DataOciObjectstorageObjectsObjectsList" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciObjectstorageObjectsObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciObjectstorageObjectsObjectsOutputReference <a name="DataOciObjectstorageObjectsObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_objects

dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.archivalState">archival_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.md5">md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.storageTier">storage_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjects">DataOciObjectstorageObjectsObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archival_state`<sup>Required</sup> <a name="archival_state" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.archivalState"></a>

```python
archival_state: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `md5`<sup>Required</sup> <a name="md5" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.md5"></a>

```python
md5: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `storage_tier`<sup>Required</sup> <a name="storage_tier" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciObjectstorageObjectsObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjects.DataOciObjectstorageObjectsObjects">DataOciObjectstorageObjectsObjects</a>

---




# `dataOciJmsJavaDownloadsJavaDownloadToken` Submodule <a name="`dataOciJmsJavaDownloadsJavaDownloadToken` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJavaDownloadsJavaDownloadToken <a name="DataOciJmsJavaDownloadsJavaDownloadToken" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_token oci_jms_java_downloads_java_download_token}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  java_download_token_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.javaDownloadTokenId">java_download_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_token#java_download_token_id DataOciJmsJavaDownloadsJavaDownloadToken#java_download_token_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `java_download_token_id`<sup>Required</sup> <a name="java_download_token_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.Initializer.parameter.javaDownloadTokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_token#java_download_token_id DataOciJmsJavaDownloadsJavaDownloadToken#java_download_token_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaDownloadToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJavaDownloadsJavaDownloadToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaDownloadToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.createdBy">created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList">DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy">last_updated_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.licenseType">license_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeExpires">time_expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeLastUsed">time_last_used</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.javaDownloadTokenIdInput">java_download_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.javaDownloadTokenId">java_download_token_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.createdBy"></a>

```python
created_by: DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList">DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.lastUpdatedBy"></a>

```python
last_updated_by: DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList">DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList</a>

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.licenseType"></a>

```python
license_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_expires`<sup>Required</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeExpires"></a>

```python
time_expires: str
```

- *Type:* str

---

##### `time_last_used`<sup>Required</sup> <a name="time_last_used" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeLastUsed"></a>

```python
time_last_used: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `java_download_token_id_input`<sup>Optional</sup> <a name="java_download_token_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.javaDownloadTokenIdInput"></a>

```python
java_download_token_id_input: str
```

- *Type:* str

---

##### `java_download_token_id`<sup>Required</sup> <a name="java_download_token_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.javaDownloadTokenId"></a>

```python
java_download_token_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokenConfig <a name="DataOciJmsJavaDownloadsJavaDownloadTokenConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  java_download_token_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.javaDownloadTokenId">java_download_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_token#java_download_token_id DataOciJmsJavaDownloadsJavaDownloadToken#java_download_token_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `java_download_token_id`<sup>Required</sup> <a name="java_download_token_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenConfig.property.javaDownloadTokenId"></a>

```python
java_download_token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_java_downloads_java_download_token#java_download_token_id DataOciJmsJavaDownloadsJavaDownloadToken#java_download_token_id}.

---

### DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy <a name="DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy()
```


### DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy <a name="DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList <a name="DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy">DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy">DataOciJmsJavaDownloadsJavaDownloadTokenCreatedBy</a>

---


### DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList <a name="DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference <a name="DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_java_downloads_java_download_token

dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJavaDownloadsJavaDownloadToken.DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy">DataOciJmsJavaDownloadsJavaDownloadTokenLastUpdatedBy</a>

---




# `dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories oci_delegate_access_control_delegated_resource_access_request_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegated_resource_access_request_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.delegatedResourceAccessRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#delegated_resource_access_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#filter DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestHistoryCollection">delegated_resource_access_request_history_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestIdInput">delegated_resource_access_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `delegated_resource_access_request_history_collection`<sup>Required</sup> <a name="delegated_resource_access_request_history_collection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestHistoryCollection"></a>

```python
delegated_resource_access_request_history_collection: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filter"></a>

```python
filter: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList</a>

---

##### `delegated_resource_access_request_id_input`<sup>Optional</sup> <a name="delegated_resource_access_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestIdInput"></a>

```python
delegated_resource_access_request_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.delegatedResourceAccessRequestId"></a>

```python
delegated_resource_access_request_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegated_resource_access_request_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.delegatedResourceAccessRequestId"></a>

```python
delegated_resource_access_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#delegated_resource_access_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#filter DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#id DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection()
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems()
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#name DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#values DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#regex DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#name DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#values DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_histories#regex DataOciDelegateAccessControlDelegatedResourceAccessRequestHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.requestStatus">request_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `request_status`<sup>Required</sup> <a name="request_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.requestStatus"></a>

```python
request_status: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItems</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.items"></a>

```python
items: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesDelegatedResourceAccessRequestHistoryCollection</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]]

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request_histories

dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequestHistories.DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestHistoriesFilter</a>]

---




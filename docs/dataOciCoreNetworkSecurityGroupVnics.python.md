# `dataOciCoreNetworkSecurityGroupVnics` Submodule <a name="`dataOciCoreNetworkSecurityGroupVnics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreNetworkSecurityGroupVnics <a name="DataOciCoreNetworkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics oci_core_network_security_group_vnics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_security_group_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupVnicsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.networkSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#filter DataOciCoreNetworkSecurityGroupVnics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupVnicsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupVnics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupVnics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreNetworkSecurityGroupVnics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreNetworkSecurityGroupVnics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreNetworkSecurityGroupVnics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList">DataOciCoreNetworkSecurityGroupVnicsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupVnics">network_security_group_vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupIdInput">network_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filter"></a>

```python
filter: DataOciCoreNetworkSecurityGroupVnicsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList">DataOciCoreNetworkSecurityGroupVnicsFilterList</a>

---

##### `network_security_group_vnics`<sup>Required</sup> <a name="network_security_group_vnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupVnics"></a>

```python
network_security_group_vnics: DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupVnicsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_security_group_id_input`<sup>Optional</sup> <a name="network_security_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupIdInput"></a>

```python
network_security_group_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreNetworkSecurityGroupVnicsConfig <a name="DataOciCoreNetworkSecurityGroupVnicsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_security_group_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupVnicsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#network_security_group_id DataOciCoreNetworkSecurityGroupVnics#network_security_group_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupVnicsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#filter DataOciCoreNetworkSecurityGroupVnics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#id DataOciCoreNetworkSecurityGroupVnics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreNetworkSecurityGroupVnicsFilter <a name="DataOciCoreNetworkSecurityGroupVnicsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#name DataOciCoreNetworkSecurityGroupVnics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#values DataOciCoreNetworkSecurityGroupVnics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#regex DataOciCoreNetworkSecurityGroupVnics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#name DataOciCoreNetworkSecurityGroupVnics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#values DataOciCoreNetworkSecurityGroupVnics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_vnics#regex DataOciCoreNetworkSecurityGroupVnics#regex}.

---

### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreNetworkSecurityGroupVnicsFilterList <a name="DataOciCoreNetworkSecurityGroupVnicsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupVnicsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]]

---


### DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference <a name="DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreNetworkSecurityGroupVnicsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsFilter">DataOciCoreNetworkSecurityGroupVnicsFilter</a>]

---


### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference <a name="DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_vnics

dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.timeAssociated">time_associated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `time_associated`<sup>Required</sup> <a name="time_associated" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.timeAssociated"></a>

```python
time_associated: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnicsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupVnics.DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics">DataOciCoreNetworkSecurityGroupVnicsNetworkSecurityGroupVnics</a>

---




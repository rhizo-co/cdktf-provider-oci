# `dataOciCoreNetworkSecurityGroupSecurityRules` Submodule <a name="`dataOciCoreNetworkSecurityGroupSecurityRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreNetworkSecurityGroupSecurityRules <a name="DataOciCoreNetworkSecurityGroupSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules oci_core_network_security_group_security_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules(
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
  direction: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupSecurityRulesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.networkSecurityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.direction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#filter DataOciCoreNetworkSecurityGroupSecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupSecurityRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]

---

##### `reset_direction` <a name="reset_direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupSecurityRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupSecurityRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreNetworkSecurityGroupSecurityRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreNetworkSecurityGroupSecurityRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreNetworkSecurityGroupSecurityRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList">DataOciCoreNetworkSecurityGroupSecurityRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.securityRules">security_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupIdInput">network_security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filter"></a>

```python
filter: DataOciCoreNetworkSecurityGroupSecurityRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList">DataOciCoreNetworkSecurityGroupSecurityRulesFilterList</a>

---

##### `security_rules`<sup>Required</sup> <a name="security_rules" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.securityRules"></a>

```python
security_rules: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupSecurityRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_security_group_id_input`<sup>Optional</sup> <a name="network_security_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupIdInput"></a>

```python
network_security_group_id_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreNetworkSecurityGroupSecurityRulesConfig <a name="DataOciCoreNetworkSecurityGroupSecurityRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_security_group_id: str,
  direction: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupSecurityRulesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.networkSecurityGroupId">network_security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.direction">direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_security_group_id`<sup>Required</sup> <a name="network_security_group_id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.networkSecurityGroupId"></a>

```python
network_security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupSecurityRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#filter DataOciCoreNetworkSecurityGroupSecurityRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreNetworkSecurityGroupSecurityRulesFilter <a name="DataOciCoreNetworkSecurityGroupSecurityRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#name DataOciCoreNetworkSecurityGroupSecurityRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#values DataOciCoreNetworkSecurityGroupSecurityRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#regex DataOciCoreNetworkSecurityGroupSecurityRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#name DataOciCoreNetworkSecurityGroupSecurityRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#values DataOciCoreNetworkSecurityGroupSecurityRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_network_security_group_security_rules#regex DataOciCoreNetworkSecurityGroupSecurityRules#regex}.

---

### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules()
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions()
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions()
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange()
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange()
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions()
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange()
```


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreNetworkSecurityGroupSecurityRulesFilterList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreNetworkSecurityGroupSecurityRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]]

---


### DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreNetworkSecurityGroupSecurityRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesFilter">DataOciCoreNetworkSecurityGroupSecurityRulesFilter</a>]

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.icmpOptions">icmp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.isValid">is_valid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.stateless">stateless</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.tcpOptions">tcp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.udpOptions">udp_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `icmp_options`<sup>Required</sup> <a name="icmp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.icmpOptions"></a>

```python
icmp_options: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.isValid"></a>

```python
is_valid: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.stateless"></a>

```python
stateless: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tcp_options`<sup>Required</sup> <a name="tcp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.tcpOptions"></a>

```python
tcp_options: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `udp_options`<sup>Required</sup> <a name="udp_options" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.udpOptions"></a>

```python
udp_options: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList</a>

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList</a>

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions</a>

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_network_security_group_security_rules

dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreNetworkSecurityGroupSecurityRules.DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange">DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange</a>

---




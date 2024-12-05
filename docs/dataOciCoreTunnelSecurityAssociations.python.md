# `dataOciCoreTunnelSecurityAssociations` Submodule <a name="`dataOciCoreTunnelSecurityAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreTunnelSecurityAssociations <a name="DataOciCoreTunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations oci_core_tunnel_security_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  tunnel_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreTunnelSecurityAssociationsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.ipsecId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.tunnelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#filter DataOciCoreTunnelSecurityAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreTunnelSecurityAssociationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreTunnelSecurityAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreTunnelSecurityAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreTunnelSecurityAssociations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreTunnelSecurityAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreTunnelSecurityAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList">DataOciCoreTunnelSecurityAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelSecurityAssociations">tunnel_security_associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecIdInput">ipsec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecId">ipsec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filter"></a>

```python
filter: DataOciCoreTunnelSecurityAssociationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList">DataOciCoreTunnelSecurityAssociationsFilterList</a>

---

##### `tunnel_security_associations`<sup>Required</sup> <a name="tunnel_security_associations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelSecurityAssociations"></a>

```python
tunnel_security_associations: DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreTunnelSecurityAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipsec_id_input`<sup>Optional</sup> <a name="ipsec_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecIdInput"></a>

```python
ipsec_id_input: str
```

- *Type:* str

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreTunnelSecurityAssociationsConfig <a name="DataOciCoreTunnelSecurityAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  tunnel_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreTunnelSecurityAssociationsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#ipsec_id DataOciCoreTunnelSecurityAssociations#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#tunnel_id DataOciCoreTunnelSecurityAssociations#tunnel_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreTunnelSecurityAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#filter DataOciCoreTunnelSecurityAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#id DataOciCoreTunnelSecurityAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreTunnelSecurityAssociationsFilter <a name="DataOciCoreTunnelSecurityAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#name DataOciCoreTunnelSecurityAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#values DataOciCoreTunnelSecurityAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#regex DataOciCoreTunnelSecurityAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#name DataOciCoreTunnelSecurityAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#values DataOciCoreTunnelSecurityAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_tunnel_security_associations#regex DataOciCoreTunnelSecurityAssociations#regex}.

---

### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreTunnelSecurityAssociationsFilterList <a name="DataOciCoreTunnelSecurityAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreTunnelSecurityAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreTunnelSecurityAssociationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]]

---


### DataOciCoreTunnelSecurityAssociationsFilterOutputReference <a name="DataOciCoreTunnelSecurityAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreTunnelSecurityAssociationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsFilter">DataOciCoreTunnelSecurityAssociationsFilter</a>]

---


### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference <a name="DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_tunnel_security_associations

dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.cpeSubnet">cpe_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.oracleSubnet">oracle_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaErrorInfo">tunnel_sa_error_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaStatus">tunnel_sa_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpe_subnet`<sup>Required</sup> <a name="cpe_subnet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.cpeSubnet"></a>

```python
cpe_subnet: str
```

- *Type:* str

---

##### `oracle_subnet`<sup>Required</sup> <a name="oracle_subnet" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.oracleSubnet"></a>

```python
oracle_subnet: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `tunnel_sa_error_info`<sup>Required</sup> <a name="tunnel_sa_error_info" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaErrorInfo"></a>

```python
tunnel_sa_error_info: str
```

- *Type:* str

---

##### `tunnel_sa_status`<sup>Required</sup> <a name="tunnel_sa_status" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.tunnelSaStatus"></a>

```python
tunnel_sa_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreTunnelSecurityAssociations.DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations">DataOciCoreTunnelSecurityAssociationsTunnelSecurityAssociations</a>

---




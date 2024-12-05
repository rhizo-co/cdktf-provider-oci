# `dataOciCoreIpsecConnectionTunnelRoutes` Submodule <a name="`dataOciCoreIpsecConnectionTunnelRoutes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecConnectionTunnelRoutes <a name="DataOciCoreIpsecConnectionTunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes oci_core_ipsec_connection_tunnel_routes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes(
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
  advertiser: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelRoutesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.advertiser">advertiser</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.ipsecId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.tunnelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}.

---

##### `advertiser`<sup>Optional</sup> <a name="advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.advertiser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#filter DataOciCoreIpsecConnectionTunnelRoutes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetAdvertiser">reset_advertiser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelRoutesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]

---

##### `reset_advertiser` <a name="reset_advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetAdvertiser"></a>

```python
def reset_advertiser() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnelRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnelRoutes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnelRoutes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreIpsecConnectionTunnelRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnelRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList">DataOciCoreIpsecConnectionTunnelRoutesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelRoutes">tunnel_routes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiserInput">advertiser_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecIdInput">ipsec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiser">advertiser</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecId">ipsec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filter"></a>

```python
filter: DataOciCoreIpsecConnectionTunnelRoutesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList">DataOciCoreIpsecConnectionTunnelRoutesFilterList</a>

---

##### `tunnel_routes`<sup>Required</sup> <a name="tunnel_routes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelRoutes"></a>

```python
tunnel_routes: DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList</a>

---

##### `advertiser_input`<sup>Optional</sup> <a name="advertiser_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiserInput"></a>

```python
advertiser_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelRoutesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipsec_id_input`<sup>Optional</sup> <a name="ipsec_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecIdInput"></a>

```python
ipsec_id_input: str
```

- *Type:* str

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `advertiser`<sup>Required</sup> <a name="advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.advertiser"></a>

```python
advertiser: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecConnectionTunnelRoutesConfig <a name="DataOciCoreIpsecConnectionTunnelRoutesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipsec_id: str,
  tunnel_id: str,
  advertiser: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelRoutesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.ipsecId">ipsec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.tunnelId">tunnel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.advertiser">advertiser</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipsec_id`<sup>Required</sup> <a name="ipsec_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.ipsecId"></a>

```python
ipsec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#ipsec_id DataOciCoreIpsecConnectionTunnelRoutes#ipsec_id}.

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#tunnel_id DataOciCoreIpsecConnectionTunnelRoutes#tunnel_id}.

---

##### `advertiser`<sup>Optional</sup> <a name="advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.advertiser"></a>

```python
advertiser: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#advertiser DataOciCoreIpsecConnectionTunnelRoutes#advertiser}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelRoutesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#filter DataOciCoreIpsecConnectionTunnelRoutes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#id DataOciCoreIpsecConnectionTunnelRoutes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecConnectionTunnelRoutesFilter <a name="DataOciCoreIpsecConnectionTunnelRoutesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#name DataOciCoreIpsecConnectionTunnelRoutes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#values DataOciCoreIpsecConnectionTunnelRoutes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#regex DataOciCoreIpsecConnectionTunnelRoutes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#name DataOciCoreIpsecConnectionTunnelRoutes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#values DataOciCoreIpsecConnectionTunnelRoutes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_connection_tunnel_routes#regex DataOciCoreIpsecConnectionTunnelRoutes#regex}.

---

### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecConnectionTunnelRoutesFilterList <a name="DataOciCoreIpsecConnectionTunnelRoutesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreIpsecConnectionTunnelRoutesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]]

---


### DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference <a name="DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreIpsecConnectionTunnelRoutesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesFilter">DataOciCoreIpsecConnectionTunnelRoutesFilter</a>]

---


### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference <a name="DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_connection_tunnel_routes

dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.advertiser">advertiser</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.age">age</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.asPath">as_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.isBestPath">is_best_path</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advertiser`<sup>Required</sup> <a name="advertiser" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.advertiser"></a>

```python
advertiser: str
```

- *Type:* str

---

##### `age`<sup>Required</sup> <a name="age" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.age"></a>

```python
age: str
```

- *Type:* str

---

##### `as_path`<sup>Required</sup> <a name="as_path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.asPath"></a>

```python
as_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_best_path`<sup>Required</sup> <a name="is_best_path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.isBestPath"></a>

```python
is_best_path: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecConnectionTunnelRoutes.DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes">DataOciCoreIpsecConnectionTunnelRoutesTunnelRoutes</a>

---




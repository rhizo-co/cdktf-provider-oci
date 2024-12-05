# `dataOciNetworkFirewallNetworkFirewallPolicyUrlLists` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyUrlLists` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyUrlLists <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlLists" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists oci_network_firewall_network_firewall_policy_url_lists}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.networkFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#filter DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyUrlLists resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyUrlLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyUrlLists to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyUrlLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyUrlLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.urlListSummaryCollection">url_list_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyIdInput">network_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filter"></a>

```python
filter: DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList</a>

---

##### `url_list_summary_collection`<sup>Required</sup> <a name="url_list_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.urlListSummaryCollection"></a>

```python
url_list_summary_collection: DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_firewall_policy_id_input`<sup>Optional</sup> <a name="network_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyIdInput"></a>

```python
network_firewall_policy_id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlLists.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  network_firewall_policy_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#network_firewall_policy_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#display_name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#filter DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#id DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#values DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#regex DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#name DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#values DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_url_lists#regex DataOciNetworkFirewallNetworkFirewallPolicyUrlLists#regex}.

---

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection()
```


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems()
```


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]]

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsFilter</a>]

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">network_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.totalUrls">total_urls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.urls">urls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_firewall_policy_id`<sup>Required</sup> <a name="network_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```python
network_firewall_policy_id: str
```

- *Type:* str

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `total_urls`<sup>Required</sup> <a name="total_urls" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.totalUrls"></a>

```python
total_urls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `urls`<sup>Required</sup> <a name="urls" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.urls"></a>

```python
urls: DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsUrls</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_network_firewall_network_firewall_policy_url_lists

dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyUrlLists.DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyUrlListsUrlListSummaryCollection</a>

---




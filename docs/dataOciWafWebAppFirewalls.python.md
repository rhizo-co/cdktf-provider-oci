# `dataOciWafWebAppFirewalls` Submodule <a name="`dataOciWafWebAppFirewalls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewalls <a name="DataOciWafWebAppFirewalls" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls oci_waf_web_app_firewalls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallsFilter]] = None,
  id: str = None,
  state: typing.List[str] = None,
  web_app_firewall_policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.webAppFirewallPolicyId">web_app_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#filter DataOciWafWebAppFirewalls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}.

---

##### `web_app_firewall_policy_id`<sup>Optional</sup> <a name="web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.Initializer.parameter.webAppFirewallPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetWebAppFirewallPolicyId">reset_web_app_firewall_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_web_app_firewall_policy_id` <a name="reset_web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.resetWebAppFirewallPolicyId"></a>

```python
def reset_web_app_firewall_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewalls resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWafWebAppFirewalls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWafWebAppFirewalls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWafWebAppFirewalls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewalls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList">DataOciWafWebAppFirewallsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallCollection">web_app_firewall_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList">DataOciWafWebAppFirewallsWebAppFirewallCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyIdInput">web_app_firewall_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyId">web_app_firewall_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filter"></a>

```python
filter: DataOciWafWebAppFirewallsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList">DataOciWafWebAppFirewallsFilterList</a>

---

##### `web_app_firewall_collection`<sup>Required</sup> <a name="web_app_firewall_collection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallCollection"></a>

```python
web_app_firewall_collection: DataOciWafWebAppFirewallsWebAppFirewallCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList">DataOciWafWebAppFirewallsWebAppFirewallCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `web_app_firewall_policy_id_input`<sup>Optional</sup> <a name="web_app_firewall_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyIdInput"></a>

```python
web_app_firewall_policy_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `web_app_firewall_policy_id`<sup>Required</sup> <a name="web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.webAppFirewallPolicyId"></a>

```python
web_app_firewall_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewalls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallsConfig <a name="DataOciWafWebAppFirewallsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallsFilter]] = None,
  id: str = None,
  state: typing.List[str] = None,
  web_app_firewall_policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.webAppFirewallPolicyId">web_app_firewall_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#compartment_id DataOciWafWebAppFirewalls#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#display_name DataOciWafWebAppFirewalls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#filter DataOciWafWebAppFirewalls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#id DataOciWafWebAppFirewalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#state DataOciWafWebAppFirewalls#state}.

---

##### `web_app_firewall_policy_id`<sup>Optional</sup> <a name="web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsConfig.property.webAppFirewallPolicyId"></a>

```python
web_app_firewall_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#web_app_firewall_policy_id DataOciWafWebAppFirewalls#web_app_firewall_policy_id}.

---

### DataOciWafWebAppFirewallsFilter <a name="DataOciWafWebAppFirewallsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#name DataOciWafWebAppFirewalls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#values DataOciWafWebAppFirewalls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#regex DataOciWafWebAppFirewalls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#name DataOciWafWebAppFirewalls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#values DataOciWafWebAppFirewalls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewalls#regex DataOciWafWebAppFirewalls#regex}.

---

### DataOciWafWebAppFirewallsWebAppFirewallCollection <a name="DataOciWafWebAppFirewallsWebAppFirewallCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection()
```


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItems <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallsFilterList <a name="DataOciWafWebAppFirewallsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]]

---


### DataOciWafWebAppFirewallsFilterOutputReference <a name="DataOciWafWebAppFirewallsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciWafWebAppFirewallsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsFilter">DataOciWafWebAppFirewallsFilter</a>]

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.webAppFirewallPolicyId">web_app_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems">DataOciWafWebAppFirewallsWebAppFirewallCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `web_app_firewall_policy_id`<sup>Required</sup> <a name="web_app_firewall_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.webAppFirewallPolicyId"></a>

```python
web_app_firewall_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallsWebAppFirewallCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItems">DataOciWafWebAppFirewallsWebAppFirewallCollectionItems</a>

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionList <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference <a name="DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewalls

dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList">DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection">DataOciWafWebAppFirewallsWebAppFirewallCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.items"></a>

```python
items: DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList">DataOciWafWebAppFirewallsWebAppFirewallCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallsWebAppFirewallCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewalls.DataOciWafWebAppFirewallsWebAppFirewallCollection">DataOciWafWebAppFirewallsWebAppFirewallCollection</a>

---




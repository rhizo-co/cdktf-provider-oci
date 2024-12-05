# `dataOciWafWebAppFirewallPolicies` Submodule <a name="`dataOciWafWebAppFirewallPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewallPolicies <a name="DataOciWafWebAppFirewallPolicies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies oci_waf_web_app_firewall_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies(
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
  filter: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallPoliciesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#filter DataOciWafWebAppFirewallPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallPoliciesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWafWebAppFirewallPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWafWebAppFirewallPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewallPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList">DataOciWafWebAppFirewallPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.webAppFirewallPolicyCollection">web_app_firewall_policy_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filter"></a>

```python
filter: DataOciWafWebAppFirewallPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList">DataOciWafWebAppFirewallPoliciesFilterList</a>

---

##### `web_app_firewall_policy_collection`<sup>Required</sup> <a name="web_app_firewall_policy_collection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.webAppFirewallPolicyCollection"></a>

```python
web_app_firewall_policy_collection: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallPoliciesConfig <a name="DataOciWafWebAppFirewallPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallPoliciesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#filter DataOciWafWebAppFirewallPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}.

---

### DataOciWafWebAppFirewallPoliciesFilter <a name="DataOciWafWebAppFirewallPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#name DataOciWafWebAppFirewallPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#values DataOciWafWebAppFirewallPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#regex DataOciWafWebAppFirewallPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#name DataOciWafWebAppFirewallPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#values DataOciWafWebAppFirewallPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#regex DataOciWafWebAppFirewallPolicies#regex}.

---

### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions()
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallPoliciesFilterList <a name="DataOciWafWebAppFirewallPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciWafWebAppFirewallPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]]

---


### DataOciWafWebAppFirewallPoliciesFilterOutputReference <a name="DataOciWafWebAppFirewallPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciWafWebAppFirewallPoliciesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>]

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.template">template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.template"></a>

```python
template: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.body">body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.body"></a>

```python
body: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList</a>

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.headers"></a>

```python
headers: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestAccessControl">request_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestProtection">request_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestRateLimiting">request_rate_limiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseAccessControl">response_access_control</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseProtection">response_protection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.actions"></a>

```python
actions: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `request_access_control`<sup>Required</sup> <a name="request_access_control" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestAccessControl"></a>

```python
request_access_control: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList</a>

---

##### `request_protection`<sup>Required</sup> <a name="request_protection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestProtection"></a>

```python
request_protection: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList</a>

---

##### `request_rate_limiting`<sup>Required</sup> <a name="request_rate_limiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestRateLimiting"></a>

```python
request_rate_limiting: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList</a>

---

##### `response_access_control`<sup>Required</sup> <a name="response_access_control" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseAccessControl"></a>

```python
response_access_control: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList</a>

---

##### `response_protection`<sup>Required</sup> <a name="response_protection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseProtection"></a>

```python
response_protection: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.defaultActionName">default_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_action_name`<sup>Required</sup> <a name="default_action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.defaultActionName"></a>

```python
default_action_name: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.rules"></a>

```python
rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">body_inspection_size_limit_exceeded_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">body_inspection_size_limit_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body_inspection_size_limit_exceeded_action_name`<sup>Required</sup> <a name="body_inspection_size_limit_exceeded_action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```python
body_inspection_size_limit_exceeded_action_name: str
```

- *Type:* str

---

##### `body_inspection_size_limit_in_bytes`<sup>Required</sup> <a name="body_inspection_size_limit_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```python
body_inspection_size_limit_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.rules"></a>

```python
rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">is_body_inspection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilities">protection_capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">protection_capability_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `is_body_inspection_enabled`<sup>Required</sup> <a name="is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```python
is_body_inspection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protection_capabilities`<sup>Required</sup> <a name="protection_capabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```python
protection_capabilities: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `protection_capability_settings`<sup>Required</sup> <a name="protection_capability_settings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```python
protection_capability_settings: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">request_cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_cookies`<sup>Required</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```python
request_cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborative_action_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborative_weights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `collaborative_action_threshold`<sup>Required</sup> <a name="collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```python
collaborative_action_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collaborative_weights`<sup>Required</sup> <a name="collaborative_weights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```python
collaborative_weights: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```python
exclusions: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">max_http_request_header_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">max_http_request_headers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">max_number_of_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">max_single_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">max_total_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_http_methods`<sup>Required</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_http_request_header_length`<sup>Required</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```python
max_http_request_header_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_http_request_headers`<sup>Required</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```python
max_http_request_headers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_arguments`<sup>Required</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```python
max_number_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_single_argument_length`<sup>Required</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```python
max_single_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_argument_length`<sup>Required</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```python
max_total_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.rules"></a>

```python
rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">action_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">requests_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_duration_in_seconds`<sup>Required</sup> <a name="action_duration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```python
action_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_in_seconds`<sup>Required</sup> <a name="period_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```python
period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_limit`<sup>Required</sup> <a name="requests_limit" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```python
requests_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.configurations"></a>

```python
configurations: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.rules"></a>

```python
rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.rules"></a>

```python
rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.conditionLanguage">condition_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">is_body_inspection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilities">protection_capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">protection_capability_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_language`<sup>Required</sup> <a name="condition_language" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```python
condition_language: str
```

- *Type:* str

---

##### `is_body_inspection_enabled`<sup>Required</sup> <a name="is_body_inspection_enabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```python
is_body_inspection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protection_capabilities`<sup>Required</sup> <a name="protection_capabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```python
protection_capabilities: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `protection_capability_settings`<sup>Required</sup> <a name="protection_capability_settings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```python
protection_capability_settings: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">request_cookies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_cookies`<sup>Required</sup> <a name="request_cookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```python
request_cookies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborative_action_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborative_weights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_name`<sup>Required</sup> <a name="action_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```python
action_name: str
```

- *Type:* str

---

##### `collaborative_action_threshold`<sup>Required</sup> <a name="collaborative_action_threshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```python
collaborative_action_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collaborative_weights`<sup>Required</sup> <a name="collaborative_weights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```python
collaborative_weights: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```python
exclusions: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">max_http_request_header_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">max_http_request_headers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">max_number_of_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">max_single_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">max_total_argument_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_http_methods`<sup>Required</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_http_request_header_length`<sup>Required</sup> <a name="max_http_request_header_length" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```python
max_http_request_header_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_http_request_headers`<sup>Required</sup> <a name="max_http_request_headers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```python
max_http_request_headers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_number_of_arguments`<sup>Required</sup> <a name="max_number_of_arguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```python
max_number_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_single_argument_length`<sup>Required</sup> <a name="max_single_argument_length" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```python
max_single_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_argument_length`<sup>Required</sup> <a name="max_total_argument_length" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```python
max_total_argument_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waf_web_app_firewall_policies

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.items"></a>

```python
items: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection</a>

---




# `dataOciLogAnalyticsLogAnalyticsObjectCollectionRules` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsObjectCollectionRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRules <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules oci_log_analytics_log_analytics_object_collection_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules(
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
  namespace: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#filter DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsObjectCollectionRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsLogAnalyticsObjectCollectionRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsObjectCollectionRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.logAnalyticsObjectCollectionRuleCollection">log_analytics_object_collection_rule_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filter"></a>

```python
filter: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList</a>

---

##### `log_analytics_object_collection_rule_collection`<sup>Required</sup> <a name="log_analytics_object_collection_rule_collection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.logAnalyticsObjectCollectionRuleCollection"></a>

```python
log_analytics_object_collection_rule_collection: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  namespace: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#compartment_id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#namespace DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#namespace}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#filter DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#id DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#state DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#state}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#values DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#regex DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#name DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#values DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_object_collection_rules#regex DataOciLogAnalyticsLogAnalyticsObjectCollectionRules#regex}.

---

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection()
```


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems()
```


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]]

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesFilter</a>]

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.charEncoding">char_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.collectionType">collection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isForceHistoricCollection">is_force_historic_collection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSet">log_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetExtRegex">log_set_ext_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetKey">log_set_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSourceName">log_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.objectNameFilters">object_name_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osBucketName">os_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osNamespace">os_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.overrides">overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollSince">poll_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollTill">poll_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `char_encoding`<sup>Required</sup> <a name="char_encoding" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.charEncoding"></a>

```python
char_encoding: str
```

- *Type:* str

---

##### `collection_type`<sup>Required</sup> <a name="collection_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.collectionType"></a>

```python
collection_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_force_historic_collection`<sup>Required</sup> <a name="is_force_historic_collection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.isForceHistoricCollection"></a>

```python
is_force_historic_collection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_set`<sup>Required</sup> <a name="log_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSet"></a>

```python
log_set: str
```

- *Type:* str

---

##### `log_set_ext_regex`<sup>Required</sup> <a name="log_set_ext_regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetExtRegex"></a>

```python
log_set_ext_regex: str
```

- *Type:* str

---

##### `log_set_key`<sup>Required</sup> <a name="log_set_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSetKey"></a>

```python
log_set_key: str
```

- *Type:* str

---

##### `log_source_name`<sup>Required</sup> <a name="log_source_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logSourceName"></a>

```python
log_source_name: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_name_filters`<sup>Required</sup> <a name="object_name_filters" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.objectNameFilters"></a>

```python
object_name_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_bucket_name`<sup>Required</sup> <a name="os_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osBucketName"></a>

```python
os_bucket_name: str
```

- *Type:* str

---

##### `os_namespace`<sup>Required</sup> <a name="os_namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.osNamespace"></a>

```python
os_namespace: str
```

- *Type:* str

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.overrides"></a>

```python
overrides: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList</a>

---

##### `poll_since`<sup>Required</sup> <a name="poll_since" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollSince"></a>

```python
poll_since: str
```

- *Type:* str

---

##### `poll_till`<sup>Required</sup> <a name="poll_till" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.pollTill"></a>

```python
poll_till: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchValue">match_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyName">property_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyValue">property_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `match_value`<sup>Required</sup> <a name="match_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.matchValue"></a>

```python
match_value: str
```

- *Type:* str

---

##### `property_name`<sup>Required</sup> <a name="property_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyName"></a>

```python
property_name: str
```

- *Type:* str

---

##### `property_value`<sup>Required</sup> <a name="property_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.propertyValue"></a>

```python
property_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsOverrides</a>

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_object_collection_rules

dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsObjectCollectionRules.DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection">DataOciLogAnalyticsLogAnalyticsObjectCollectionRulesLogAnalyticsObjectCollectionRuleCollection</a>

---




# `dataOciLogAnalyticsLogAnalyticsEntityTopology` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntityTopology` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopology <a name="DataOciLogAnalyticsLogAnalyticsEntityTopology" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology oci_log_analytics_log_analytics_entity_topology}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_entity_id: str,
  namespace: str,
  id: str = None,
  metadata_equals: typing.List[str] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.logAnalyticsEntityId">log_analytics_entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.metadataEquals">metadata_equals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_entity_id`<sup>Required</sup> <a name="log_analytics_entity_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.logAnalyticsEntityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata_equals`<sup>Optional</sup> <a name="metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.metadataEquals"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetMetadataEquals">reset_metadata_equals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata_equals` <a name="reset_metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetMetadataEquals"></a>

```python
def reset_metadata_equals() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntityTopology resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntityTopology resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntityTopology to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsLogAnalyticsEntityTopology that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntityTopology to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityIdInput">log_analytics_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEqualsInput">metadata_equals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityId">log_analytics_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEquals">metadata_equals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.items"></a>

```python
items: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_analytics_entity_id_input`<sup>Optional</sup> <a name="log_analytics_entity_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityIdInput"></a>

```python
log_analytics_entity_id_input: str
```

- *Type:* str

---

##### `metadata_equals_input`<sup>Optional</sup> <a name="metadata_equals_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEqualsInput"></a>

```python
metadata_equals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_analytics_entity_id`<sup>Required</sup> <a name="log_analytics_entity_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.logAnalyticsEntityId"></a>

```python
log_analytics_entity_id: str
```

- *Type:* str

---

##### `metadata_equals`<sup>Required</sup> <a name="metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.metadataEquals"></a>

```python
metadata_equals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopology.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_analytics_entity_id: str,
  namespace: str,
  id: str = None,
  metadata_equals: typing.List[str] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.logAnalyticsEntityId">log_analytics_entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.metadataEquals">metadata_equals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_analytics_entity_id`<sup>Required</sup> <a name="log_analytics_entity_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.logAnalyticsEntityId"></a>

```python
log_analytics_entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#log_analytics_entity_id DataOciLogAnalyticsLogAnalyticsEntityTopology#log_analytics_entity_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#namespace DataOciLogAnalyticsLogAnalyticsEntityTopology#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#id DataOciLogAnalyticsLogAnalyticsEntityTopology#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata_equals`<sup>Optional</sup> <a name="metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.metadataEquals"></a>

```python
metadata_equals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#metadata_equals DataOciLogAnalyticsLogAnalyticsEntityTopology#metadata_equals}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entity_topology#state DataOciLogAnalyticsLogAnalyticsEntityTopology#state}.

---

### DataOciLogAnalyticsLogAnalyticsEntityTopologyItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems()
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks()
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems()
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes()
```


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.destinationEntityId">destination_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.sourceEntityId">source_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_entity_id`<sup>Required</sup> <a name="destination_entity_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.destinationEntityId"></a>

```python
destination_entity_id: str
```

- *Type:* str

---

##### `source_entity_id`<sup>Required</sup> <a name="source_entity_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.sourceEntityId"></a>

```python
source_entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinks</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.areLogsCollected">are_logs_collected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeInternalName">entity_type_internal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeName">entity_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timezoneRegion">timezone_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_logs_collected`<sup>Required</sup> <a name="are_logs_collected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.areLogsCollected"></a>

```python
are_logs_collected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cloud_resource_id`<sup>Required</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.cloudResourceId"></a>

```python
cloud_resource_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `entity_type_internal_name`<sup>Required</sup> <a name="entity_type_internal_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeInternalName"></a>

```python
entity_type_internal_name: str
```

- *Type:* str

---

##### `entity_type_name`<sup>Required</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.entityTypeName"></a>

```python
entity_type_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `timezone_region`<sup>Required</sup> <a name="timezone_region" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.timezoneRegion"></a>

```python
timezone_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodes</a>

---


### DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entity_topology

dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.links">links</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `links`<sup>Required</sup> <a name="links" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.links"></a>

```python
links: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsLinksList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.nodes"></a>

```python
nodes: DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList">DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsNodesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntityTopologyItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntityTopology.DataOciLogAnalyticsLogAnalyticsEntityTopologyItems">DataOciLogAnalyticsLogAnalyticsEntityTopologyItems</a>

---




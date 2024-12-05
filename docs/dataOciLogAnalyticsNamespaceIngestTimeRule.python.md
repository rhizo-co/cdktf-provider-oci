# `dataOciLogAnalyticsNamespaceIngestTimeRule` Submodule <a name="`dataOciLogAnalyticsNamespaceIngestTimeRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRule <a name="DataOciLogAnalyticsNamespaceIngestTimeRule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule oci_log_analytics_namespace_ingest_time_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ingest_time_rule_id: str,
  namespace: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.ingestTimeRuleId">ingest_time_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#ingest_time_rule_id DataOciLogAnalyticsNamespaceIngestTimeRule#ingest_time_rule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#namespace DataOciLogAnalyticsNamespaceIngestTimeRule#namespace}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ingest_time_rule_id`<sup>Required</sup> <a name="ingest_time_rule_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.ingestTimeRuleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#ingest_time_rule_id DataOciLogAnalyticsNamespaceIngestTimeRule#ingest_time_rule_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#namespace DataOciLogAnalyticsNamespaceIngestTimeRule#namespace}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceIngestTimeRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceIngestTimeRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsNamespaceIngestTimeRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceIngestTimeRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleIdInput">ingest_time_rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleId">ingest_time_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.actions"></a>

```python
actions: DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.conditions"></a>

```python
conditions: DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `ingest_time_rule_id_input`<sup>Optional</sup> <a name="ingest_time_rule_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleIdInput"></a>

```python
ingest_time_rule_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `ingest_time_rule_id`<sup>Required</sup> <a name="ingest_time_rule_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.ingestTimeRuleId"></a>

```python
ingest_time_rule_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRuleActions <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleActions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions()
```


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditions <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions()
```


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions()
```


### DataOciLogAnalyticsNamespaceIngestTimeRuleConfig <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ingest_time_rule_id: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.ingestTimeRuleId">ingest_time_rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#ingest_time_rule_id DataOciLogAnalyticsNamespaceIngestTimeRule#ingest_time_rule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#namespace DataOciLogAnalyticsNamespaceIngestTimeRule#namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ingest_time_rule_id`<sup>Required</sup> <a name="ingest_time_rule_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.ingestTimeRuleId"></a>

```python
ingest_time_rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#ingest_time_rule_id DataOciLogAnalyticsNamespaceIngestTimeRule#ingest_time_rule_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_ingest_time_rule#namespace DataOciLogAnalyticsNamespaceIngestTimeRule#namespace}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions">DataOciLogAnalyticsNamespaceIngestTimeRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceIngestTimeRuleActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleActions">DataOciLogAnalyticsNamespaceIngestTimeRuleActions</a>

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionField">condition_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionOperator">condition_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionValue">condition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_field`<sup>Required</sup> <a name="condition_field" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionField"></a>

```python
condition_field: str
```

- *Type:* str

---

##### `condition_operator`<sup>Required</sup> <a name="condition_operator" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionOperator"></a>

```python
condition_operator: str
```

- *Type:* str

---

##### `condition_value`<sup>Required</sup> <a name="condition_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.conditionValue"></a>

```python
condition_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditions</a>

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference <a name="DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_ingest_time_rule

dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.additionalConditions">additional_conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldOperator">field_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldValue">field_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_conditions`<sup>Required</sup> <a name="additional_conditions" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.additionalConditions"></a>

```python
additional_conditions: DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList">DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsAdditionalConditionsList</a>

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `field_operator`<sup>Required</sup> <a name="field_operator" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldOperator"></a>

```python
field_operator: str
```

- *Type:* str

---

##### `field_value`<sup>Required</sup> <a name="field_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.fieldValue"></a>

```python
field_value: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceIngestTimeRuleConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceIngestTimeRule.DataOciLogAnalyticsNamespaceIngestTimeRuleConditions">DataOciLogAnalyticsNamespaceIngestTimeRuleConditions</a>

---




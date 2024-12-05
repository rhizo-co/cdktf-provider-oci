# `dataOciLogAnalyticsLogAnalyticsResourceCategoriesList` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsResourceCategoriesList` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list oci_log_analytics_log_analytics_resource_categories_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  id: str = None,
  resource_categories: str = None,
  resource_ids: str = None,
  resource_types: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.resourceCategories">resource_categories</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.resourceIds">resource_ids</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.resourceTypes">resource_types</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_categories`<sup>Optional</sup> <a name="resource_categories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.resourceCategories"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}.

---

##### `resource_ids`<sup>Optional</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.resourceIds"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}.

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.Initializer.parameter.resourceTypes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceCategories">reset_resource_categories</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceIds">reset_resource_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceTypes">reset_resource_types</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_categories` <a name="reset_resource_categories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceCategories"></a>

```python
def reset_resource_categories() -> None
```

##### `reset_resource_ids` <a name="reset_resource_ids" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceIds"></a>

```python
def reset_resource_ids() -> None
```

##### `reset_resource_types` <a name="reset_resource_types" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.resetResourceTypes"></a>

```python
def reset_resource_types() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsResourceCategoriesList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsResourceCategoriesList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsResourceCategoriesList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsLogAnalyticsResourceCategoriesList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsResourceCategoriesList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.categories">categories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategoriesInput">resource_categories_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIdsInput">resource_ids_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypesInput">resource_types_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategories">resource_categories</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIds">resource_ids</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypes">resource_types</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `categories`<sup>Required</sup> <a name="categories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.categories"></a>

```python
categories: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.items"></a>

```python
items: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_categories_input`<sup>Optional</sup> <a name="resource_categories_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategoriesInput"></a>

```python
resource_categories_input: str
```

- *Type:* str

---

##### `resource_ids_input`<sup>Optional</sup> <a name="resource_ids_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIdsInput"></a>

```python
resource_ids_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypesInput"></a>

```python
resource_types_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_categories`<sup>Required</sup> <a name="resource_categories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceCategories"></a>

```python
resource_categories: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceIds"></a>

```python
resource_ids: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.resourceTypes"></a>

```python
resource_types: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories()
```


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  id: str = None,
  resource_categories: str = None,
  resource_ids: str = None,
  resource_types: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceCategories">resource_categories</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceIds">resource_ids</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceTypes">resource_types</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#namespace DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#id DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_categories`<sup>Optional</sup> <a name="resource_categories" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceCategories"></a>

```python
resource_categories: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_categories DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_categories}.

---

##### `resource_ids`<sup>Optional</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceIds"></a>

```python
resource_ids: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_ids DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_ids}.

---

##### `resource_types`<sup>Optional</sup> <a name="resource_types" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListConfig.property.resourceTypes"></a>

```python
resource_types: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_resource_categories_list#resource_types DataOciLogAnalyticsLogAnalyticsResourceCategoriesList#resource_types}.

---

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.isSystem">is_system</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_system`<sup>Required</sup> <a name="is_system" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.isSystem"></a>

```python
is_system: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategoriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListCategories</a>

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_resource_categories_list

dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.categoryName">category_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.isSystem">is_system</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_name`<sup>Required</sup> <a name="category_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.categoryName"></a>

```python
category_name: str
```

- *Type:* str

---

##### `is_system`<sup>Required</sup> <a name="is_system" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.isSystem"></a>

```python
is_system: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsResourceCategoriesList.DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems">DataOciLogAnalyticsLogAnalyticsResourceCategoriesListItems</a>

---



